import React from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBar = (props) => {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([]);


    const getSearch = () => {
        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=cf0710105c7cebaf3b51cf0e45affb42&query=${search}`)
            .then((res) => setData(res.data.results))
    }

    useEffect(() => {
        getSearch()
    }, [search]);

    const handleSelect = (movie) => {
        window.location.replace(`/movie/?movie=${movie.id}`)
    }

    const formatResult = (item) => {
        return <span style={{ display: 'block', textAlign: 'left' }}>{item.title}</span>
    }

    return (
        <div style={{ width: '300px', margin: '0px auto', marginBottom: '52px', marginTop: '-56px' }}>
            <ReactSearchAutocomplete
                maxResults={500}
                items={data}
                fuseOptions={{ keys: ["title"] }}
                onSearch={setSearch}
                formatResult={formatResult}
                onSelect={handleSelect}
                placeholder={"Find a movie for tonight?"}
                styling={{
                    zIndex: 9999,
                    color: '#081d25',
                    border: `4px solid black`,
                }}
            />
        </div>
    );
};

export default SearchBar;


import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CoverMovie from '../cards';
import { Container } from './style';
import InfiniteScroll from "react-infinite-scroll-component";



const Movies = (props) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const getMovies = () => {
        axios
            .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=cf0710105c7cebaf3b51cf0e45affb42&page=${page}`)
            .then((res) => setData([...data, ...res.data.results]))
        setPage(page + 1);
    }

    //il faut cloisonner axios dans le hooks useEffect pour que le get se fasse uniquement au montage du composant
    useEffect(() => {
        getMovies()
    }, []);


    return (
        <InfiniteScroll
            dataLength={data.length}
            next={getMovies}
            hasMore={true}
            loader={<h4>Loading...</h4>}
        >
            <Container>
                {
                    data.map((movie, index) => (<CoverMovie key={index} movie={movie} />))
                }
            </Container >

        </InfiniteScroll>
    );
};

export default Movies;


import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CoverMovie from '../cards';
import { Container, LabelRadio, ListRadio } from './style';
import InfiniteScroll from "react-infinite-scroll-component";

const Movies = (props) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedRadio, setSelectedRadio] = useState('top_rated');

    const categoriesRadio = [
        { name: 'Top rated', id: 'top_rated' },
        { name: 'Popular', id: 'popular' },
        { name: 'Upcoming', id: 'upcoming' },
    ];

    const getMovies = (isRadio) => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${selectedRadio}?api_key=cf0710105c7cebaf3b51cf0e45affb42&page=${page}`)
            .then((res) => {
                if (isRadio) {
                    setData(res.data.results)
                    setPage(1);
                } else {
                    setData([...data, ...res.data.results])
                    setPage(page + 1);
                }
            })
    }

    //il faut cloisonner axios dans le hooks useEffect pour que le get se fasse uniquement au montage du composant
    useEffect(() => {
        getMovies()
    }, []);

    useEffect(() => {
        getMovies(true)
    }, [selectedRadio])


    return (
        <>
            <ListRadio>
                {categoriesRadio.map((category, index) => (

                    <li key={index} style={{ listStyle: 'none' }}>
                        <input
                            type="radio"
                            id={category.id}
                            name="categoriesRadio"
                            checked={category.id === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)}
                        />
                        <LabelRadio htmlFor={category.name}>{category.name}</LabelRadio>
                    </li>

                ))}
            </ListRadio>

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
        </>
    );
};

export default Movies;


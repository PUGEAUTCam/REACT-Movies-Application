import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CoverMovie from '../cards';
import { Container } from './style';




const Movies = () => {

    const [data, setData] = useState([]);

    //il faut cloisonner axios dans le hooks useEffect
    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/movie/top_rated?api_key=cf0710105c7cebaf3b51cf0e45affb42&')
            .then((res) => setData(res.data.results))
    }, []);


    return (
        <Container>
            {
                data.map((movie, index) => (<CoverMovie key={index} movie={movie} />))
            }
        </Container>
    );
};

export default Movies;


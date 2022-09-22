import React from 'react';
import Movies from '../../components/movies';
import SearchBar from '../../components/searchBar';
import Navigation from '../../components/navigation';

const Home = () => {
    return (
        <>
            <Navigation />
            <SearchBar />
            <Movies />
        </>
    );
};

export default Home;
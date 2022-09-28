import React from 'react';
import Movies from '../../components/movies';
import SearchBar from '../../components/searchBar';
import Navigation from '../../components/navigation';

const Home = (props) => {
    return (
        <>
            <Navigation />
            <div style={{ height: '452px' }}>
                <img src="./fond.jpeg" alt="fond bleu" style={{ width: '100%', height: '448px', position: 'absolute', left: '0' }} />
            </div>
            <SearchBar />
            <Movies />
        </>
    );
};

export default Home;
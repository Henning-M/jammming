import './Home.css';
import React from 'react';
import Header from '../../Nav/header/Header';
// import { <reducers> } from '../Home/homeSlice';

function Home() {

    return(
        <div className='Home'>
            <Header/>
            <h1>Index page / starting point</h1>
        </div>
    )
}

export default Home;
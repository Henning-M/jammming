import './Home.css';
import React from 'react';
import Header from '../../Nav/header/Header';
// import { <reducers> } from '../Home/homeSlice';

function Home() {

    return(
        <div className='Home'>
            <Header/>
            <h1>Index page / starting point</h1>
            <p>
                Useful references:
                <ul>
                    <li><a href="https://challonge.com/">Challonge</a>, seems to require all players to register with the platform</li>
                    <li><a href="https://tournifyapp.com/">Tournify</a>, very limited in free version</li>
                </ul>
            </p>
        </div>
    )
}

export default Home;
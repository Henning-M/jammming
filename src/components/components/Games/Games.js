import './Games.css';
import React from 'react'; //add { useState, useEffect } if needed
import Header from '../../Nav/header/Header';
import shuffleArray from '../../utils/helpers'; //returns shuffled version of array given as input
import { useDispatch, useSelector } from 'react-redux';
import { addGame, clearSchedule, setSchedule } from './gamesSlice' //add clearSchedule when integrating functionality in component
// import { setPlayerA, setPlayerB, addTeam, removeTeam, clearTeams, toggleFormVisibility } from '../Registration/teamsSlice';


function Games() {

    //import state
    const dispatch = useDispatch();
    const teamsArray = useSelector((state) => state.teams.teamsArray);
    const schedule = useSelector((state) => state.games.schedule);


    const handleCreateKnockouts = () => {

      //Step 1: create array with numbers from 0 - teamsArray.length - e.g. [0, 1, 2, 3] for 4 teams
      const teamKeys = Object.keys(teamsArray);
      
      //Step 2: create copy with randomized order of numbers in that array - e.g. [3, 0, 2, 1]
      const randomizedTeamKeys = shuffleArray(teamKeys.slice());

      //Step 3: create array with gameIDs - for simplification, #games will be teams/2, assuming teamsArray.length is ^2
      //e.g. [4.1, 4.2, 4.3, 4.4] for 8 teams / a 1/4-final
      const gameIDs = [];
      const gameIdFront = teamsArray.length / 2;
      for (let i = 1; i <= gameIdFront; i++) {
        let gameId = `${gameIdFront}.${i}`
        gameIDs.push(gameId);
      };

      //Step 4: use addGame reducer to construct new game object and add it to the schedule
      gameIDs.forEach((ID) => {
        let gameID = ID;

        if (randomizedTeamKeys.length >= 2) {
            //Select the numbers at index 0 & 1 to create the game
            let teamA = teamsArray[randomizedTeamKeys[0]];
            let teamB = teamsArray[randomizedTeamKeys[1]];

            // Remove the numbers at index 0 & 1 from the array
            randomizedTeamKeys.splice(0, 2);

            let payloadObject = {
                gameID: gameID,
                teamA: teamA,
                teamB: teamB,
            };

            dispatch(addGame(payloadObject));
        }
    });
};

    const handleClearSchedule = () => {
      dispatch(clearSchedule())
    };

    const handleResultSubmit = (event) => {
        event.preventDefault();
        // dispatch(addResult());                  // Dispatch action to add result
      };

    return(
        <div className='Games'>
            <Header/>
            <h2>This will be the overview of games / a game schedule</h2>
            <p>
            {teamsArray.length > 0 ? (
            <div>
                <ol>
              {teamsArray.map((team, index) => (
                <li key={index}>
                  {team.teamName}
                </li>
              ))}
            </ol>
            <p>
              <button onClick={handleCreateKnockouts}>Create / Reshuffle schedule</button>
              <button onClick={handleClearSchedule}>Clear schedule</button></p>
            </div>
          ) : (
            <p>No teams registered yet.</p>
          )}
            </p>
            <h2>1/{teamsArray.length / 2} finals</h2>
            <div class="games-list">
              {Object.keys(schedule).map((gameID) => {
                const game = schedule[gameID];
                return (
                  <div key={gameID} className="game">
                      <h2>Game {gameID}</h2>
                      <p>Team A: {game.teamA.teamName}</p>
                      <p>Team B: {game.teamB.teamName}</p>
                  </div>
                )
              })}
            </div>
        </div>
    )
}

export default Games;

// //div old (non functioning after fixing store update)
// <div>
//   {schedule && Object.keys(schedule).map((game, index) => (
//     <div key={index}>
//       <p>Game {game}:</p>
//       <form onSubmit = {handleResultSubmit}>
//         <p>
//           <label htmlFor={`team${game}.1`}>{schedule[game][0].teamName}</label>
//           <input type="number" min="0" max="2" id=""></input>
//         </p>
//         <p>
//           <label htmlFor={`team${game}.2`}>{schedule[game][1].teamName}</label>
//           <input type="number" min="0" max="2" id=""></input>
//         </p>
//       </form>
//     </div>
//   ))}
// </div>
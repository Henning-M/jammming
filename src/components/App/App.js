import './App.css';
import React, { useState } from 'react';

function App() {

  const [playerA, setPlayerA] = useState('');
  const [playerB, setPlayerB] = useState('');
  const [teamsArray, setTeamsArray] = useState([]);

  const handleInputChange = ( {target} ) => {
    if(target.id === "playerA") {
    setPlayerA(target.value);
    } else {
      setPlayerB(target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!playerA || !playerB || playerA.toLowerCase() === 'tbd' || playerB.toLowerCase() === 'tbd') {
      alert("Please only register once your team is complete (no 'tbd' players)");
      return;                                                   // Stop the function if the conditions are not met
    }

    const newTeam = `${playerA} / ${playerB}`;

    if (teamsArray.includes(newTeam)) {
      alert("Please only submit unique teams.");
    } else {
    setTeamsArray([...teamsArray, `${playerA} / ${playerB}`])   // Add team to array
    setPlayerA('');                                             // Clear input field Player A
    setPlayerB('');                                             // Clear input field Player B
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        this is the header
      </header>
      <main className='App-main'>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Create a team</h2>
            <p>
              <label htmlFor='playerA'>Player A: </label> 
              <input type="text" id="playerA" value={playerA} onChange={handleInputChange}/>
            </p>
            <p>
              <label htmlFor='playerB'>Player B: </label> 
              <input type="text" id="playerB" value={playerB} onChange={handleInputChange}/>
            </p>
            <p>
              Name of Team: {playerA} / {playerB}
            </p>
            <button type="submit" id="submitTeam">Register team</button>
          </div>
        </form>
        <hr></hr>
        <div>
        <h2>Registered Teams</h2>
        <ol>
          {teamsArray.map((team, index) => (
            <li key={index}>{team}</li>
          ))}
        </ol>
      </div>
      <button onClick={() => setTeamsArray([""])}>Clear Teams</button>
      </main>
    </div>
  );
}

export default App;

import './Registration.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerA, setPlayerB, addTeam, removeTeam, clearTeams, toggleFormVisibility } from '../Registration/teamsSlice';
import Header from '../../Nav/header/Header';

function Registration() {
  const dispatch = useDispatch();
  const { playerA, playerB, teamsArray, isFormVisible } = useSelector((state) => state.teams);
  
//Using local state (instead of redux) because only needed to live-display team-name before submission
  const [teamName, setTeamName] = useState('');
  useEffect(() => {
    setTeamName(`${playerA} / ${playerB}`);
  }, [playerA, playerB]);
//End of local state usage

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    if (id === 'playerA') {
      dispatch(setPlayerA(value));
    } else if (id === 'playerB') {
      dispatch(setPlayerB(value));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTeam());                  // Dispatch action to add team
  };

  const handleRemoveTeam = (team) => {
    dispatch(removeTeam(team));           // Dispatch action to remove team
  };

  const handleClearTeams = () => {
    dispatch(clearTeams());               // Dispatch action to clear teams
  };

  const handleCloseRegistration = () => {
    dispatch(toggleFormVisibility());
  }

  return (
    <div className="App">
      <Header/>
      <main className="App-main">
        {isFormVisible && (
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Register a team</h2>
            <p>
              <label htmlFor="playerA">Player A: </label>
              <input type="text" id="playerA" value={playerA} onChange={handleInputChange} />
            </p>
            <p>
              <label htmlFor="playerB">Player B: </label>
              <input type="text" id="playerB" value={playerB} onChange={handleInputChange} />
            </p>
            <p>
              Team name (automatically assigned): {teamName}
            </p>
            <button type="submit">Register team</button>
          </div>
        </form>
        )}
        <hr></hr>

        <div>
          <h2>Registered Teams</h2>
          {teamsArray.length > 0 ? (
            <ol>
              {teamsArray.map((team, index) => (
                <li key={index}>
                  {team} {isFormVisible && <span className="removeTeam" onClick={() => handleRemoveTeam(team)}>  [X]</span>}
                </li>
              ))}
            </ol>
          ) : (
            <p>No teams registered yet.</p>
          )}
          {isFormVisible &&
            <p><button onClick={handleClearTeams}>Clear Teams</button></p>
            }
          <p><button onClick={handleCloseRegistration}>{isFormVisible ? 'Close registration' : 'Re-open registration'}</button></p>
        </div>

        <hr></hr>

        {!isFormVisible && 
        <div className="knockouts">
          <p>Time for knockout games!</p>
        </div>
        }
      </main>
    </div>
  );
}

export default Registration;
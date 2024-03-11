import { createSlice } from "@reduxjs/toolkit";

export const gamesSlice = createSlice({
    name: 'games',
    initialState: {
        schedule: {}
    },
    reducers: {
        addGame: (state, action) => {
            console.log("Adding game with payload:", action.payload);
            const { gameID, teamA, teamB } = action.payload;
            state.schedule[gameID] = new Game(gameID, teamA, teamB);
        },
        setSchedule: (state, action) => {
            state.schedule = action.payload;
        },
        clearSchedule: (state) => {
            state.schedule = {};
        }
    }
});


// Game constructor
class Game {
    constructor(gameID, teamA, teamB) {
      this.gameID = gameID;
      this.teamA = teamA;
      this.teamB = teamB;
      this.teamASetsWon = 0;
      this.teamBSetsWon = 0;
      this.teamAPointsWon = 0;
      this.teamBPointsWon = 0;
    }
  }

  
export const { addGame, setSchedule, clearSchedule } = gamesSlice.actions;
export default gamesSlice.reducer;
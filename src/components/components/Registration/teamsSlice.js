import { createSlice } from '@reduxjs/toolkit';

export const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    playerA: '',
    playerB: '',
    teamsArray: [],
    isFormVisible: true
  },
  reducers: {
    setPlayerA: (state, action) => {
      state.playerA = action.payload;
    },
    setPlayerB: (state, action) => {
      state.playerB = action.payload;
    },
    addTeam: (state) => {
      state.teamsArray.push(`${state.playerA} / ${state.playerB}`);
      state.playerA = ''; // Clear playerA after submission
      state.playerB = ''; // Clear playerB after submission
  },
  removeTeam: (state, action) => {
    state.teamsArray = state.teamsArray.filter((team) => team !== action.payload);    // Define logic to remove a team
  },
  clearTeams: (state) => {
    state.teamsArray = [];
  },
  toggleFormVisibility: (state) => {
    state.isFormVisible = !state.isFormVisible;
  }
}});

export const { setPlayerA, setPlayerB, addTeam, removeTeam, clearTeams, toggleFormVisibility } = teamsSlice.actions;

export default teamsSlice.reducer;
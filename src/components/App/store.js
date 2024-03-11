import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from '../components/Registration/teamsSlice'
import gamesReducer from '../components/Games/gamesSlice';


export const store = configureStore({
  reducer: {
    teams: teamsReducer,
    games: gamesReducer
  },
});
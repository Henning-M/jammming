import { configureStore } from '@reduxjs/toolkit';
import teamsReducer from '../components/Registration/teamsSlice'


export const store = configureStore({
  reducer: {
    teams: teamsReducer
  },
});
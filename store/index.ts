// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import creatorsReducer from './creatorsSlice';

const store = configureStore({
  reducer: {
    creators: creatorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

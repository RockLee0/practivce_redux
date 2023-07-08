import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
// import logger from './middlewares/logger';
import countReducer from '././features/counter/counterSlice'
import logger from 'redux-logger'
const store = configureStore({
  reducer: {
    count:countReducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
  // middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
  
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store;
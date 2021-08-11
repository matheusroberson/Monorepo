import {
    Action,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  import infoReducer from '../store/infos/infosSlice'

  export const store = configureStore( {
    reducer: {
        infos: infoReducer
    },
  });
  
  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type AppThunk<ReturnType = void> = ThunkAction<
     ReturnType,
     RootState,
     unknown,
     Action<string>
   >;
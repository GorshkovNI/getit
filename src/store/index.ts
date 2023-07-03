import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import usersReducer from './user/userSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;

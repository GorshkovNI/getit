import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import usersReducer from './user/userSlice';
import advertisementSlice from "@store/advertisement/advertisementSlice";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        advertisement: advertisementSlice
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

import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthResponse, IUser} from "@store/user/userInteface";
import {checkAuth, createUser, login, logout} from "@store/user/userSlice";

const initialState = {

}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
});

export const { setIsAuth, removeIsAuth, clearError } = usersSlice.actions;
export default usersSlice.reducer;
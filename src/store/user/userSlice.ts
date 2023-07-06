import {createSlice, createAsyncThunk, PayloadAction, Draft, ThunkDispatch} from '@reduxjs/toolkit';
import UserApi from "../../app/userApi/userApi";
import {IUserCreate} from "./userInteface";
import {AppDispatch, RootState} from "../index";
import {AxiosError} from "axios";


interface User {
    id: number;
    name: string;
    email: string;
    // и так далее
}

interface ErrorPayload {
    message?: string;
    errors?: string[];
}

interface UsersState {
    entities: User[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: ErrorPayload | null;
}

const initialState: UsersState = {
    entities: [],
    loading: 'idle',
    error: null,
};

export const createUser = createAsyncThunk(
    'users/createUser',
    async (data: IUserCreate, { rejectWithValue }) => {
        try {
            const response = await UserApi.createUser(data);
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError; // Приводим error к типу AxiosError
            if (axiosError.response) {
                return rejectWithValue(axiosError.response.data);
            } else {
                return rejectWithValue(axiosError.message);
            }
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsLoading(state){
            state.loading = 'pending'
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.loading = 'pending';
        });
        builder.addCase(createUser.fulfilled, (state) => {
            state.loading = 'succeeded';
        });
        builder.addCase(createUser.rejected, (state, action) => {
            state.loading = 'failed';
            console.log(action.payload)
            if (action.payload) {
                if (typeof action.payload === 'string') {
                    state.error = { message: action.payload };
                } else {
                    state.error = action.payload;
                }
            }
        });
    }
});



export default usersSlice.reducer;
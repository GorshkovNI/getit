import {createSlice, createAsyncThunk, PayloadAction, Draft} from '@reduxjs/toolkit';
import { fetchUsersFromApi } from '../../app/userApi/userApi';

interface User {
    id: number;
    name: string;
    email: string;
    // и так далее
}

interface UsersState {
    entities: User[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UsersState = {
    entities: [],
    loading: 'idle',
    error: null,
};

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetchUsersFromApi();
        return response;
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state: Draft<UsersState>) => {
                state.loading = 'pending';
            })
            .addCase(fetchUsers.fulfilled, (state: Draft<UsersState>, action) => {
                state.loading = 'succeeded';
                state.entities = action.payload;
            })
            .addCase(fetchUsers.rejected, (state: Draft<UsersState>, action) => {
                state.loading = 'failed';
                state.error = action.error.message || null;
            })
    },
});

export default usersSlice.reducer;
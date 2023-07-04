import {createSlice, createAsyncThunk, PayloadAction, Draft, ThunkDispatch} from '@reduxjs/toolkit';
import UserApi from "../../app/userApi/userApi";
import {IUserCreate} from "./userInteface";
import {AppDispatch, RootState} from "../index";


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

export const createUser = createAsyncThunk(
    'users/createUser',
    async (data: IUserCreate, { dispatch }) => {
        try {
            const response = await UserApi.createUser(data);
            console.log(response)
            // Dispatch actions here if needed
        } catch (e) {
            console.log('Ошибка => ', e);
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
        builder.addCase(createUser.rejected, (state) => {
            state.loading = 'failed';
        });
    }
});

// export const createUser = (data:IUserCreate) => async (dispatch: ThunkDispatch<AppDispatch, RootState, any>) => {
//     try{
//         const response = await UserApi.createUser(data)
//     }catch (e){
//         console.log('Ошибка => ', e)
//     }
// }

export default usersSlice.reducer;
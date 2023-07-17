import {createSlice, createAsyncThunk, PayloadAction, Draft, ThunkDispatch} from '@reduxjs/toolkit';
import UserApi from "../../app/userApi/userApi";
import {AuthResponse, IAds, IUser, IUserCreate, IUserLogin} from "./userInteface";
import axios, {AxiosError} from "axios";
import {API_URL} from "@src/app/http";


interface ErrorPayload {
    status?: number,
    message?: string;
    errors?: string[];
}

interface UsersState {
    //entities: User[];
    user: IUser;
    ads: IAds[]
    isAuth: boolean;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: ErrorPayload | null;
}

const initialState: UsersState = {
    //entities: [],
    user:{
        name: '',
        id: '',
        email: '',
        phone: '',
        photo: ''
    },
    ads: [],
    isAuth: false,
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
            }
            // else {
            //     return rejectWithValue(axiosError.message);
            // }
        }
    }
);

export const login = createAsyncThunk(
    'users/login',
    async (data: IUserLogin, { rejectWithValue }) => {
        try {
            const response = await UserApi.login(data);
            console.log(response.data)
            localStorage.setItem('token', response.data.accessToken)
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError; // Приводим error к типу AxiosError
            if (axiosError.response) {
                return rejectWithValue(axiosError.response.data);
            }
            // else {
            //     return rejectWithValue(axiosError.message);
            // }
        }
    }
);

export const checkAuth = createAsyncThunk(
    'users/checkAuth',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken);
            console.log(response.data)
            return response.data;
        } catch (error) {
            const axiosError = error as AxiosError;
            console.log(axiosError)
            return rejectWithValue(axiosError.message);
            // else {
            //     return rejectWithValue(axiosError.message);
            // }
        }
    }
);

export const logout = createAsyncThunk(
    'users/logout',
    async (_, {rejectWithValue}) => {
        try {
            const response = await UserApi.logout()
            localStorage.removeItem('token');
            return response;
        } catch (error) {
            const axiosError = error as AxiosError;
            console.log(axiosError)
            return rejectWithValue(axiosError.message);
            // else {
            //     return rejectWithValue(axiosError.message);
            // }
        }
    }
);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setIsAuth(state){
            state.isAuth = true
        },
        removeIsAuth(state){
            state.isAuth = false
        },
        clearError(state) {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        // CREATE USER
        builder.addCase(createUser.pending, (state:UsersState) => {
            state.loading = 'pending';
        });
        builder.addCase(createUser.fulfilled, (state:UsersState) => {
            state.loading = 'succeeded';
        });
        builder.addCase(createUser.rejected, (state:UsersState, action) => {
            state.loading = 'failed';
            if (action.payload) {
                 state.error = action.payload as ErrorPayload;
            }
        });

        // LOGIN
        builder.addCase(login.pending, (state: UsersState) => {
            state.loading = 'pending';
        })
        builder.addCase(login.fulfilled, (state: UsersState, action:PayloadAction<AuthResponse>) => {
            state.loading = 'succeeded';
            state.user = action.payload.user;
            state.isAuth = true;
        })
        builder.addCase(login.rejected, (state: UsersState, action) => {
            state.loading = 'failed';
            if (action.payload) {
                state.error = action.payload as ErrorPayload;
            }
        })
        // CheckAuth
        builder.addCase(checkAuth.pending, (state: UsersState) => {
            state.loading = 'pending';
        })
        builder.addCase(checkAuth.fulfilled, (state: UsersState, action:PayloadAction<AuthResponse>) => {
            state.loading = 'succeeded';
            state.user = action.payload.user;
            state.isAuth = true;
        })
        builder.addCase(checkAuth.rejected, (state: UsersState, action) => {
            state.loading = 'failed';
            if (action.payload) {
                state.error = action.payload as ErrorPayload;
            }
        })

        // LOGOUT
        builder.addCase(logout.pending, (state: UsersState) => {
            state.loading = 'pending';
        })
        builder.addCase(logout.fulfilled, (state: UsersState) => {
            state.loading = 'succeeded';
            state.user = {} as IUser;
            state.isAuth = false;
        })
        builder.addCase(logout.rejected, (state: UsersState, action) => {
            state.loading = 'failed';
            if (action.payload) {
                state.error = action.payload as ErrorPayload;
            }
        })
    }
});

export const { setIsAuth, removeIsAuth, clearError } = usersSlice.actions;
export default usersSlice.reducer;
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AuthResponse, IUser, IUserCreate} from "@store/user/userInteface";
import {checkAuth, createUser, login, logout} from "@store/user/userSlice";
import UserApi from "@src/app/userApi/userApi";
import {AxiosError} from "axios";
import AdvertisementApi from "@src/app/userApi/advertisementApi";
import {ErrorPayload, IAdvertisementInterface} from "@store/advertisement/advertisementInterface";

const initialState: IAdvertisementInterface = {
    category: [],
    loading: 'idle',
    error: null
}

export const getCategory = createAsyncThunk(
    'advertisementSlice/getCategory',
    async (_, { rejectWithValue }) => {
        try {
            const response = await AdvertisementApi.getAdvertisement();
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

const advertisementSlice = createSlice({
    name: 'advertisement',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCategory.pending, (state:IAdvertisementInterface) => {
            state.loading = 'pending';
        });
        builder.addCase(getCategory.fulfilled, (state:IAdvertisementInterface, action) => {
            state.loading = 'succeeded';
            state.category = action.payload
        });
        builder.addCase(getCategory.rejected, (state:IAdvertisementInterface, action) => {
            state.loading = 'failed';
            if (action.payload) {
                state.error = action.payload as ErrorPayload;
            }
        });
    }
});

//export const { setIsAuth, removeIsAuth, clearError } = usersSlice.actions;
export default advertisementSlice.reducer;
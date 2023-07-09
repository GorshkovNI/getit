import {RootState} from "@src/@types/dispatch";

export const getIsLoading = (state: RootState) => state.users.loading
export const getError = (state: RootState) => state.users.error?.message
export const getIsAuth = (state: RootState) => state.users.isAuth
export const getAllInfo = (state: RootState) => state.users
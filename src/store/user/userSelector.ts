import {RootState} from "../../@types/dispatch";

export const getIsLoading = (state: RootState) => state.users.loading
export const getError = (state: RootState) => state.users.error
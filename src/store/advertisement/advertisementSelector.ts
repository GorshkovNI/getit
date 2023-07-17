import {RootState} from "@src/@types/dispatch";

export const getAllCategory = (state: RootState) => state.advertisement.category
export const getIsAdvertisementLoading = (state: RootState) => state.advertisement.loading
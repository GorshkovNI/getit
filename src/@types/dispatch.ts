import {AnyAction, ThunkDispatch as BaseThunkDispatch} from '@reduxjs/toolkit';
import { RootState as BaseRootState } from '../store/index';

export type AppDispatch = BaseThunkDispatch<BaseRootState, void, AnyAction>;
export type RootState = BaseRootState;
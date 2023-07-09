import React, {useEffect} from "react";
import '../index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {Button} from "./shared/Button/Button";
import {Header} from "@entities/Header/Header";
import { useTheme } from "./hooks/theme/use-theme";
import { StyledEngineProvider } from "@mui/material";
import { Profile } from "./pages/Profile/Profile";
import {AppDispatch} from "@src/@types/dispatch";
import {useDispatch} from "react-redux";
import {checkAuth} from "@store/user/userSlice";

export const App = () => {

    const { theme, setTheme } = useTheme()
    const dispatch: AppDispatch = useDispatch()

    useEffect( () => {
        if(localStorage.getItem('token')){
            console.log('Token exists')
            dispatch(checkAuth())
        }
    }, [])

    return (
        <StyledEngineProvider injectFirst>
            <BrowserRouter>
                    <Header />
                <div className={'displayPages'}>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </StyledEngineProvider>
        // <Button mode='primary'>123</Button>
    )
}
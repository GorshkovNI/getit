import React from "react";
import '../index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {Button} from "./shared/Button/Button";
import {Header} from "./entities/Header/Header";
import { useTheme } from "./hooks/theme/use-theme";
import { StyledEngineProvider } from "@mui/material";
import { Profile } from "./pages/Profile/Profile";

export const App = () => {

    const { theme, setTheme } = useTheme()

    return (
        <StyledEngineProvider injectFirst>
            <BrowserRouter>
                    <Header />
                <div className={'displayPages'}>
                    <Routes>
                        <Route path='/' element={<Profile />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </StyledEngineProvider>
        // <Button mode='primary'>123</Button>
    )
}
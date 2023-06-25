import React from "react";
import '../index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {Button} from "./shared/Button/Button";
import {Header} from "./entities/Header/Header";
import { useTheme } from "./hooks/theme/use-theme";
import { StyledEngineProvider } from "@mui/material";

export const App = () => {

    const { theme, setTheme } = useTheme()

    return (
        <StyledEngineProvider injectFirst>
            <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/2' element={<Button mode={'primary'}>Вторая</Button>} />
                    </Routes>
            </BrowserRouter>
        </StyledEngineProvider>
        // <Button mode='primary'>123</Button>
    )
}
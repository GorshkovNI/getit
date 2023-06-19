import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MainPage} from "./pages/MainPage/MainPage";
import {Button} from "./shared/Button/Button";

export const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/2' element={<Button mode={'primary'}>Вторая</Button>} />
            </Routes>
        </BrowserRouter>
        // <Button mode='primary'>123</Button>
    )
}
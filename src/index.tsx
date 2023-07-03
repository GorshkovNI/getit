import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App';
import './i18n/config'
import {Provider} from "react-redux";
import {store} from "./store/index";

const root = document.getElementById('root')
if(root){
    const rootContainer = ReactDOM.createRoot(root);
    rootContainer.render(
        <Provider store={store}>
            <App />
        </Provider>
    );
}
else {
    console.error("Root element not found");
}



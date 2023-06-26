import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App';
import './i18n/config'

const root = document.getElementById('root')
if(root){
    const rootContainer = ReactDOM.createRoot(root);
    rootContainer.render(
        <Suspense fallback={<div>Loading...</div>}>
            <App />
        </Suspense>
    );
}
else {
    console.error("Root element not found");
}



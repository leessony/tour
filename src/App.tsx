import React from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Home, JejuSummer} from "./pages";

import './App.scss';

const router = createHashRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/list/2023/jeju',
        element: <JejuSummer/>
    }
])

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;

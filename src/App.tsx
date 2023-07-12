import React from 'react';
import {createHashRouter, RouterProvider} from "react-router-dom";
import {Home, MasterPlan, Schedule as Jeju2023Schedule} from "./pages";

import './App.scss';

const router = createHashRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/list/2023/jeju',
        element: <MasterPlan/>
    },
    {
        path: '/list/2023/jeju/schedule',
        element: <Jeju2023Schedule/>
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

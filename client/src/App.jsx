import React from 'react';
import "./styles/app.scss"

import {BrowserRouter, Route,  Routes, Navigate} from 'react-router-dom'
import General from './components/General';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <Routes>
                    <Route path='/:id' element={<General />}></Route>
                </Routes>
                <Navigate to={`f${(+new Date).toString(16)}`}/>
            </div>
        </BrowserRouter>
    );
};

export default App;
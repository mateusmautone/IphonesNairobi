import Login from '../Login';
import Home from '../Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
    return (
     <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes
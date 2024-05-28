import Login from '../Pages/Login';
import Home from '../Pages/Home';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../Pages/SignIn';
import Iphones from '../Pages/Iphones';


const AppRoutes = () => {
    return (
     <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
                <Route path="/Iphones" element={<Iphones/>}></Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes

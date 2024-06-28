import Login from '../Pages/Login';
import Home from '../Pages/Home';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Painel from '../Pages/Admin';
import SignIn from '../Pages/SignIn';
import Iphones from '../Pages/Iphones';
<<<<<<< HEAD
import ProductPage from '../components/Produto/Produto.js';
import ProductPage2 from '../components/Produto/ProdutoPods.js';
import ProductPage3 from '../components/Produto/ProdutoRelogio.js';

import PurchasePage from '../components/PurchasePage/PurchasePage.js';
=======
>>>>>>> 76042a4b4cd2a513b29a2a8f2ec75acdb5b933d2

const AppRoutes = () => {
    return (
     <Router>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signin" element={<SignIn/>}></Route>
<<<<<<< HEAD
                <Route path="/iphones" element={<Iphones/>}></Route>
                <Route path="/admin" element={<Painel/>}></Route>

                <Route path="/produto" element={<ProductPage/>}></Route>
                <Route path="/produto/:id" element={<ProductPage />} />

                <Route path="/produto2" element={<ProductPage2/>}></Route>
                <Route path="/produto2/:id" element={<ProductPage2 />} />

                <Route path="/produto3" element={<ProductPage3/>}></Route>
                <Route path="/produto3/:id" element={<ProductPage3 />} />


                <Route path="/compra" element={<PurchasePage/>}></Route>
                <Route path="/compra/:id" element={<PurchasePage />} />
=======
                <Route path="/Iphones" element={<Iphones/>}></Route>
                <Route path="/admin" element={<Painel/>}></Route>
>>>>>>> 76042a4b4cd2a513b29a2a8f2ec75acdb5b933d2
            </Routes>
        </Router>

    )
}

export default AppRoutes

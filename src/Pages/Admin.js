import React from "react";
import AdminPage from "../components/Painel/Painel";
// import Logo from '../photos/logo'
import HeaderLogin from "../components/HeaderLogin/HeaderLogin";


const Painel = () => {
  return (
    <div>
      <HeaderLogin></HeaderLogin>
      <AdminPage></AdminPage>
    </div>
  );
};

export default Painel;

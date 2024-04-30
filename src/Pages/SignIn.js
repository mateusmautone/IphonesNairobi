import React from "react";
import * as S from '../App.styles';
import 'primeicons/primeicons.css';
import { useState } from "react";
import HeaderLogin from "../components/HeaderLogin";
import FormsLogin from "../components/FormsLogin";


const SigIn = () => {

    
    return (
        <S.ContainerSignIn>
            <HeaderLogin></HeaderLogin>
        </S.ContainerSignIn>
    )
}

export default SigIn;

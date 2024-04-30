import React from "react";
import * as S from '../App.styles';
import 'primeicons/primeicons.css';
import { useState } from "react";

const HeaderLogin = () => {
    return(
        <S.HeaderLogin>
            <S.Title>Iphones do Nairobi</S.Title>
                <S.Subtitle>
                    <i className="pi pi-lock" style={{ color: 'white', fontSize: '2.0rem' }}></i>
                    100% Seguro
                </S.Subtitle>
        </S.HeaderLogin>
    )
}

export default HeaderLogin;
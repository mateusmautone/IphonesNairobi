import React from 'react';
import * as S from '../App.styles';
import HeaderLogin from '../components/HeaderLogin';
import FormsLogin from '../components/FormsLogin';
import FormsRegister from '../components/FormsRegister';

const SignIn = () => {
    return (
        <S.ContainerLogin>
            <HeaderLogin />
            <S.FormsContainer>
                <FormsLogin />
                <FormsRegister />
            </S.FormsContainer>
        </S.ContainerLogin>
    );
};

export default SignIn;

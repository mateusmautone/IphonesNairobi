import React from 'react';
import styled from 'styled-components';
import logoImage from './iphonenairobi2.png'; 

const StyledLogo = styled.img`
  width: 300px; 
  height: auto; 
`;

function Logo() {
  return (
    <div>
      <StyledLogo src={logoImage} alt="Logo" />
    </div>
  );
}

export default Logo;

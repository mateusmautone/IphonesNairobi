import React from 'react';
import styled from 'styled-components';
import logoImage from './iphonenairobi_branco22.png'; 

const StyledLogo = styled.img`
  width: 200px; 
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

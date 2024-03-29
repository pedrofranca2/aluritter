import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectUser } from '../../redux/userSlice';

const HeaderStyled = styled.header`
width: 100%;
height: 45px;
border-bottom: 1px solid #E5E7EB;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
`;

const ButtonStyled = styled.button`
background-color: #EF4444;
width: 39.24px;
height: 28px;
border-radius: 4px;
padding: 3.5 8.24 4.5 8px;
color: #FFFFFF;
font-size: 14px;
line-height: 20px;
align-items: center;
`;

const UserStyled = styled.h1`
  color: #6B7280;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  margin-left: 75%;
`;

const TitleStyled = styled.h1`
font-size: 18px;
line-height: 28px;
font-weight: 400;
font-family: "Roboto", sans-serif;
color: #0EA5E9;
`;

function Header() {
  const user = useSelector(selectUser);

  return (
    <HeaderStyled>
      <TitleStyled>aluritter</TitleStyled>
      <UserStyled>{user.userData.login}</UserStyled>
      <ButtonStyled>sair</ButtonStyled>
    </HeaderStyled>
  );
}

export default Header;

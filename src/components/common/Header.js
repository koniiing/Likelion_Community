import React from "react";
import styled from "styled-components";
import { Grey1, Grey2 } from "../../styles/color";
import logo from "../../assets/icon/logo.svg";
import login from "../../assets/icon/login.svg";
import { useLocation } from "react-router-dom";
import backIcon from "../../assets/icon/icon-back.svg";
function Header() {
  // useLocation훅을 통하여 현재 위치를 비구조화할당으로 pathname이라는 변수로서 저장
  const { pathname } = useLocation();
  // 홈화면일 때, 홈 화면이 아닐 때로 나누어서 조건부 렌더링 구현
  if (pathname === "/") {
    return (
      <StyledHeader1>
        <div className="logo-section">
          <LogoImg src={logo} />
          <LogoText>멋사 게시판</LogoText>
        </div>
        <LoginImg src={login} />
      </StyledHeader1>
    );
  } else {
    return (
      <StyledHeader2>
        <BackImg src={backIcon} />
        <LogoText>로그인</LogoText>
      </StyledHeader2>
    );
  }
}

const StyledHeader1 = styled.header`
  background-color: ${Grey2};
  border-bottom: ${Grey1};
  height: 55px;
  display: flex;
  align-items: center;
  padding: 20px;
  .logo-section {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }
`;

const StyledHeader2 = styled(StyledHeader1)`
  justify-content: center;
  position: relative;
`;

const LogoText = styled.div`
  font-family: "GmarketSans";
  font-size: 2rem;
  font-weight: 600;
`;

const BackImg = styled.img`
  width: 23px;
  position: absolute;
  top: 15px;
  left: 18px;
  cursor: pointer;
`;

const LogoImg = styled.img`
  height: 40px;
`;

const LoginImg = styled.img`
  margin-left: auto;
  width: 33px;
  cursor: pointer;
`;

export default Header;

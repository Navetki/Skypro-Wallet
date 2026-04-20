import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "../../App.styled";
import * as S from "./Header.styled";

const Header = ({ logout }) => {
  const location = useLocation();

  return (
    <S.Header>
      <Container>
        <S.HeaderBlock>
          {/* Левая часть: Логотип */}
          <S.HeaderLogo>
            <img src="/icons/logo.svg" alt="Skypro.Wallet" />
          </S.HeaderLogo>

          {/* Центральная часть: Навигация */}
          <S.HeaderNav>
            <S.NavLink to="/" $isActive={location.pathname === "/"}>
              Мои расходы
            </S.NavLink>
            <S.NavLink
              to="/analysis"
              $isActive={location.pathname === "/analysis"}
            >
              Анализ расходов
            </S.NavLink>
          </S.HeaderNav>

          {/* Правая часть: Кнопка выхода */}
          <S.HeaderUser onClick={logout}>Выйти</S.HeaderUser>
        </S.HeaderBlock>
      </Container>
    </S.Header>
  );
};

export default Header;

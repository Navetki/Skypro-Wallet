import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #d1d1d6;
`;

export const HeaderBlock = styled.div`
  height: 80px;
  display: grid;
  /* Сетка из 3-х колонок: края подстраиваются под контент, центр забирает всё место */
  grid-template-columns: auto 1fr auto;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 143.68px;
    height: 19px;
    object-fit: contain;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: center; /* Центрируем навигацию по середине экрана */
  gap: 40px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 16px;
  transition: all 0.2s ease;

  /* Состояние из макета: фиолетовый с подчеркиванием, если активен */
  color: ${(props) => (props.$isActive ? "#7334EA" : "#000000")};
  font-weight: ${(props) => (props.$isActive ? "600" : "400")};
  border-bottom: ${(props) =>
    props.$isActive ? "2px solid #7334EA" : "2px solid transparent"};
  padding-bottom: 4px;

  &:hover {
    color: #7334ea;
    border-bottom: 2px solid #7334ea;
  }
`;

export const HeaderUser = styled.button`
  background: none;
  border: none;
  color: #000000; /* Изначально черная по макету */
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;

  &:hover {
    color: #7334ea; /* Фиолетовый при наведении */
  }
`;

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #F4F5F6;
  }

 
  button, input, select {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 120px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 0 40px;
  }
`;

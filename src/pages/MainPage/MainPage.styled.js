import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const FullWidthBackground = styled.div`
  background-color: #f4f5f6;
  flex-grow: 1;
  width: 100%;
`;

export const MainContent = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding: 40px 0;
  width: 100%;
`;

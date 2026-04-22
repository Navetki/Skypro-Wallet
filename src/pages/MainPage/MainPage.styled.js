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
  width: 100%;
  padding: 40px 0;

  & > div:first-child,
  & > section:first-child {
    & > *:first-child {
    flex: 1 1 auto;
    min-width: 0;
  }

  & > div:last-child,
  & > section:last-child {
   width: 368px;   
    min-width: 368px;
    flex-shrink: 0;   
  }
`;

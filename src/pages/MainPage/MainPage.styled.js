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

  & > section:first-child {
    flex: 1;
    min-width: 0;
    background: #ffffff;
    padding: 30px;
    border-radius: 20px;
  }

  & > section:last-child {
    width: 368px;
    min-width: 368px;
    flex-shrink: 0;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 20px;
  width: 100%;
`;

export const TableTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #000000;
`;

export const SearchInput = styled.input`
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid #d1d1d6;
  font-size: 14px;
  outline: none;
  width: 100%;
  max-width: 280px;
  background-color: #f4f5f6;
  font-family: "Montserrat", sans-serif;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

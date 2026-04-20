import styled from "styled-components";

// Обертка для всей страницы
export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Растягиваем на всю высоту экрана */
`;

// Серая зона под хедером
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
  padding: 40px 0; /* Только сверху и снизу */
  width: 100%;
`;

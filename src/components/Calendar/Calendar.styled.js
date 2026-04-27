import styled from "styled-components";
export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 480px;
  width: 100%;
  position: relative;
`;

export const DaysHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  font-size: 12px;
  color: #767676;
  padding: 10px 0;
  border-bottom: 1px solid #f4f5f6;

  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
`;
export const CalendarScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-top: 10px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #d1d1d6;
    border-radius: 10px;
  }
`;
export const MonthTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  margin: 16px 0 12px;
`;

export const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 4px;
`;

export const Day = styled.div`
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
  z-index: 1;

  ${(props) =>
    props.$selected &&
    `
    background-color: #EBE5FF;
    color: #7334EA;
    font-weight: 700;
  `}

  ${(props) =>
    (props.$isStart || props.$isEnd) &&
    `
    background-color: #7334EA !important;
    color: #FFFFFF !important;
    border-radius: 50% !important;
  `}

  &:hover {
    background-color: #7334ea;
    color: #ffffff;
    border-radius: 50%;
  }
`;

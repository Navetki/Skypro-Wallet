import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const FullWidthBackground = styled.div`
  background-color: #f4f5f6;
  flex-grow: 1;
  padding-bottom: 60px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 32px 0;
`;

export const AnalysisContent = styled.div`
  display: flex;
  gap: 32px;

  align-items: stretch;
  width: 100%;
  margin-top: 32px;
`;
export const Sidebar = styled.aside`
  width: 368px;
  flex-shrink: 0;
  display: flex;
`;

export const MainChartArea = styled.section`
  flex: 1;
  display: flex;
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 32px;
  border-radius: 30px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const CalendarPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const DateInput = styled.input`
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #d1d1d6;
  font-family: "Montserrat", sans-serif;
  outline: none;
`;

export const ChartHeader = styled.div`
  margin-bottom: 40px;
`;

export const TotalSum = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: #000000;
`;

export const TotalLabel = styled.p`
  color: #767676;
  font-size: 14px;
`;

export const ChartContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 350px;
  padding: 40px 20px 0;
  border-bottom: 2px solid #f4f5f6;
`;

export const ChartColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
`;

export const BarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-bottom: 16px;
`;

export const BarValue = styled.span`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 12px;
  white-space: nowrap;
`;

export const BarFill = styled.div`
  width: 70px;
  border-radius: 12px 12px 0 0;
  height: ${(props) => props.$height}%;
  background-color: ${(props) => props.$color};
  transition: height 0.5s ease-in-out;
  min-height: 4px;
`;

export const BarLabel = styled.span`
  font-size: 14px;
  color: #767676;
  margin-top: 16px;
  text-align: center;
`;

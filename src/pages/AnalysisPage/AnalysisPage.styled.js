import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const FullWidthBackground = styled.div`
  background-color: #f4f5f6;
  flex-grow: 1;
  padding-bottom: 50px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 30px 0 20px;
  color: #000000;
`;

export const TotalBlock = styled.div`
  background: #ffffff;
  padding: 20px 30px;
  border-radius: 20px;
  margin-bottom: 30px;
  font-size: 18px;
  box-shadow: 0px 4px 20px -12px rgba(0, 0, 0, 0.13);

  span {
    font-weight: 700;
    color: #7334ea;
    margin-left: 10px;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
`;

export const StatCard = styled.div`
  background: #ffffff;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 4px 20px -12px rgba(0, 0, 0, 0.13);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatName = styled.span`
  font-weight: 500;
  color: #000000;
  text-transform: capitalize;
`;

export const StatValue = styled.span`
  font-weight: 700;
  color: #000000;
`;

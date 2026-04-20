import styled from "styled-components";

export const TableWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0px 4px 20px -12px rgba(0, 0, 0, 0.13);
  width: 100%;
`;

// УБЕДИСЬ, ЧТО ЭТОТ КОМПОНЕНТ ЕСТЬ:
export const TableTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #000000;
  text-align: left;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  color: #94a3b8;
  font-size: 14px;
  font-weight: 500;
  border-bottom: 1px solid #f1f5f9;
`;

export const Td = styled.td`
  padding: 16px 12px;
  font-size: 14px;
  color: #000000;
  border-bottom: 1px solid #f1f5f9;
  font-weight: ${(props) => (props.$isBold ? "700" : "400")};
`;

export const DeleteBtn = styled.button`
  color: #f64c4c;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    opacity: 0.8;
  }
`;

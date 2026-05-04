import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

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
  table-layout: fixed;
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
  padding: 12px 8px;
  word-wrap: break-word; 
  overflow-wrap: break-word;
  white-space: normal; /
  vertical-align: middle;
  
  
  &:nth-child(2) {
    width: 40%; 
  }
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

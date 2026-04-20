import styled from "styled-components";

export const FormWrapper = styled.form`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 0px 4px 20px -12px rgba(0, 0, 0, 0.13);
  width: 100%;
  max-width: 368px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #000000;
  text-align: left;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #000000;
    text-align: left;
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: #f8f7ff;
  border: 1px solid #d1d1d6;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #7334ea;
    background-color: #fff;
  }
`;

// ПРОВЕРЬ: этот компонент часто теряется при копировании
export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 10px;
`;

// И ЭТОТ:
export const CategoryItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid ${(props) => (props.$isActive ? "#7334EA" : "#D1D1D6")};
  background-color: ${(props) => (props.$isActive ? "#F8F7FF" : "#FFFFFF")};
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  img {
    width: 20px;
    height: 20px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 46px;
  background-color: #7334ea;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #5b29ba;
  }
`;

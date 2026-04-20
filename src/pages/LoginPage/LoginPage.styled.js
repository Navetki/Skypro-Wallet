import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  background-color: #eaeef6;
`;

export const ContainerSignin = styled.div`
  display: block;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
`;

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 368px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ModalTtl = styled.div`
  h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;

export const ModalForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ModalInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  outline: none;
  padding: 12px 10px;
  margin-bottom: 10px;
  font-size: 14px;

  &:focus {
    border-color: #7334ea;
  }

  &::placeholder {
    color: #94a6be;
  }
`;

export const ModalBtnEnter = styled.button`
  width: 100%;
  height: 46px;
  background-color: #7334ea;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #5b29ba;
  }

  &:active {
    background-color: #482194;
  }
`;

export const ModalFormGroup = styled.div`
  text-align: center;
  p,
  a {
    color: rgba(148, 166, 190, 0.4);
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.14px;
  }
  a {
    text-decoration: underline;
  }
`;

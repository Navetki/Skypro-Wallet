import styled from "styled-components";
import * as L from "../LoginPage/LoginPage.styled";

export const Wrapper = L.Wrapper;
export const Container = L.ContainerSignin;
export const Modal = L.Modal;
export const ModalBlock = L.ModalBlock;
export const ModalTtl = L.ModalTtl;
export const ModalForm = L.ModalForm;
export const ModalInput = L.ModalInput;
export const ModalFormGroup = L.ModalFormGroup;

export const ErrorText = styled.span`
  color: #f64c4c;
  font-size: 12px;
  margin-top: -5px;
  margin-bottom: 10px;
  width: 100%;
  text-align: left;
`;

export const ModalBtnSignup = styled.button`
  width: 100%;
  height: 46px;
  background-color: #7334ea;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #5b29ba;
  }

  &:disabled {
    background-color: #d1d1d6;
    cursor: not-allowed;
  }
`;

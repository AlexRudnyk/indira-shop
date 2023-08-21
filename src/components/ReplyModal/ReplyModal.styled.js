import styled from 'styled-components';
import { ReactComponent as Close } from '../../images/Сlose.svg';
import { Field, Form } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  overflow: scroll;
  z-index: 100;
`;

export const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  overflow: auto;
  transform: translate(-50%, -50%);
  max-height: 95%;
  background-color: white;
  border-radius: 20px;
  padding: 40px;

  @media screen and (max-width: 767.98px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 540px;
    height: 572px;
  }
`;

export const ButtonClose = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  outline: none;
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: white;
`;

export const CloseSvg = styled(Close)`
  text-align: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const ReplyModalWrapper = styled.div`
  display: flex;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    margin-top: 200px;
  }
`;

export const ReplyModalForm = styled(Form)`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767.98px) {
    width: 300px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const ReplyModalInput = styled(Field)`
  padding: 10px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  font-family: inherit;
  &:focus {
    outline: none;
  }
`;

export const ReplyModalTextArea = styled(ReplyModalInput)`
  resize: none;
`;

export const ReplyBtn = styled.button`
  width: 120px;
  padding: 10px;
  cursor: pointer;
  background-color: #b36c40;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-family: inherit;
  color: white;
  align-self: center;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;

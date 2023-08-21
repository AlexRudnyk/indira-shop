import { Field, Form } from 'formik';
import styled from 'styled-components';

export const RegisterPageSection = styled.section`
  background: linear-gradient(to bottom right, #b36c40, white);
  height: 100vh;
`;

export const RegisterPageContainer = styled.div`
  padding-top: 105px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;

  @media screen and (max-width: 767.98px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 728px;
    padding-top: 130px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;

export const RegisterPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 767.98px) {
    max-width: 420px;
  }
`;

export const RegisterPageTitle = styled.h2`
  margin-bottom: 50px;
`;

export const RegisterPageForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 30px;
`;

export const RegisterPageInput = styled(Field)`
  padding: 10px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  &:focus {
    outline: none;
  }

  @media screen and (max-width: 767.98px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;

export const RegisterPageBtn = styled.button`
  width: 100px;
  padding: 10px;
  cursor: pointer;
  background-color: #b36c40;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-family: inherit;
  color: white;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;

export const RegisterFormWrapper = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 20px 0;
  border-radius: 20px;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 767.98px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

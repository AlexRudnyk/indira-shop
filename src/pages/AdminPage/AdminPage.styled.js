import { Field, Form } from 'formik';
import styled from 'styled-components';

export const AdminPageSection = styled.section`
  background: linear-gradient(to bottom right, #b36c40, white);

  @media screen and (min-width: 1280px) {
    height: 100vw;
  }
`;

export const AdminPageContainer = styled.div`
  padding-top: 130px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767.98px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 728px;
    padding-top: 130px;
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;

export const AdminPageWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1279.98px) {
    align-items: center;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const AdminPageForm = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  max-height: 550px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;

  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 768px) {
    width: 500px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 100px;
    width: 300px;
    margin-bottom: 0;
  }
`;

export const AdminPageInput = styled(Field)`
  padding: 10px;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid black;
  font-family: inherit;
  font-size: inherit;
  &:focus {
    outline: none;
  }
`;

export const AdminPageTextArea = styled(AdminPageInput)`
  resize: none;
`;

export const AdminPageImgInput = styled.input`
  margin-bottom: 30px;
`;

export const AdminPageBtn = styled.button`
  width: 70px;
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

export const AdminPageList = styled.ul`
  @media screen and (max-width: 767.98px) {
    max-width: 420px;
  }
`;

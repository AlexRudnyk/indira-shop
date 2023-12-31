import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const UserNavLogoutBtn = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #b36c40;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-family: inherit;
  color: white;
  width: 70px;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 767.98px) {
    width: 90px;
  }

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
`;

export const UserGreetingText = styled.p`
  margin-right: 20px;
`;

export const UserNavLink = styled(Link)`
  display: block;
  padding: 10px;
  width: 45px;

  background-color: #b36c40;
  border: none;
  border-radius: 10px;
  text-align: center;
  color: white;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);

  @media screen and (max-width: 767.98px) {
    width: 70px;
    margin-top: 20px;
  }
`;

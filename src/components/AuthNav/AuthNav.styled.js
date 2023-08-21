import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthNavLink = styled(Link)`
  display: block;
  padding: 10px;
  width: 55px;

  &:not(:last-child) {
    margin-right: 20px;
  }

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
`;

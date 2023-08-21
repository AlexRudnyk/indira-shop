import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const UserNavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserNavLogoutBtn = styled.button`
  padding: 10px;
  margin-right: 20px;
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
`;

export const CartLinkWrapper = styled.div`
  position: relative;
`;

export const GoodsInCartIndicator = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10px;
  right: -10px;
  width: 20px;
  border-radius: 50%;
  background-color: red;
  padding: 4px 2px;
`;

export const IndicatorText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

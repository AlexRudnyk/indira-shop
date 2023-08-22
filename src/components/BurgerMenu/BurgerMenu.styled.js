import styled from 'styled-components';
import { ReactComponent as Close } from '../../images/Сlose.svg';
import { Link } from 'react-router-dom';

export const BurgerMenuWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 250px;
  background-color: white;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseSvg = styled(Close)`
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: center;
  width: 16px;
  height: 16px;
  cursor: pointer;
`;

export const NavHomeLink = styled(Link)`
  display: inline-block;
  padding: 10px;
  color: inherit;
  font-weight: bold;
  transition: color 0.2s ease-in-out;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    color: brown;
  }
`;

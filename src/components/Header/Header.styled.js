import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';

export const HeaderSection = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  background-color: white;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767.98px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 20px;
`;

export const LogoLinksWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: inline-block;
  padding: 0 15px;
  font-size: 32px;
  color: brown;
  font-family: 'Dancing Script', cursive;
  font-family: 'Great Vibes', cursive;

  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-right: 50px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 100px;
  }
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavHomeLink = styled(Link)`
  display: inline-block;
  padding: 10px;
  color: inherit;
  font-weight: bold;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: brown;
  }
`;

export const LogoImg = styled.img`
  position: absolute;
  top: 5px;
  left: 20px;
  width: 60px;
  z-index: -10;
  opacity: 0.6;

  @media screen and (min-width: 768px) {
    width: 80px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
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
  margin-right: 20px;
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

export const BurgerImg = styled(RxHamburgerMenu)`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

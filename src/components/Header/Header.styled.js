import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

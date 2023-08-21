import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const GoodsSectionContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
  padding-top: 105px;

  @media screen and (max-width: 767.98px) {
    max-width: 420px;
    height: ${props => (props.$length <= 1 ? '100vh' : '100%')};
  }

  @media screen and (min-width: 768px) {
    width: 728px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 130px;
    height: ${props => (props.$length <= 2 ? '100vh' : '100%')};
  }

  @media screen and (min-width: 1280px) {
    width: 1240px;
    height: ${props => (props.$length <= 3 ? '100vh' : '100%')};
  }
`;

export const GoodsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const GoodsItem = styled.li`
  position: relative;
  border-radius: 20px;
  flex-basis: calc((100% 60px) / 1);
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 30px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 30px) / 3);
  }
`;

export const GoodsItemLink = styled(Link)`
  color: inherit;
`;

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #b36c40, white);
`;

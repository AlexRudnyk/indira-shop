import styled from 'styled-components';

export const CartPageSection = styled.section`
  background: linear-gradient(to bottom right, #b36c40, white);
  height: ${props => (props.$length <= 6 ? '100vh' : '100%')};

  @media screen and (min-width: 768px) {
    height: ${props => (props.$length <= 4 ? '100vh' : '100%')};
  }
`;

export const CartPageContainer = styled.div`
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
  }

  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;

export const CartPageTitle = styled.h3`
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
`;

export const CartPageList = styled.ul`
  margin-bottom: 50px;
`;

export const TotalSumText = styled.p`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;

export const MakeOrderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OrderBtn = styled.button`
  padding: 10px;
  cursor: pointer;
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

export const TotalSumSpan = styled.span`
  display: block;
  font-size: 24px;
  width: 60px;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;

export const EmptyCartMessageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

export const EmptyCartMessage = styled.p`
  font-size: 26px;
`;

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #b36c40, white);
`;

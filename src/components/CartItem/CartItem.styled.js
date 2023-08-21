import styled from 'styled-components';

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

export const CartItemLine = styled.li`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;

  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-bottom: 50px;
    padding: 5px;
  }
`;

export const ChosenGoodWrapper = styled.div`
  display: flex;

  @media screen and (min-width: 768px) {
    width: 700px;
    margin-right: 50px;
  }
`;

export const CartItemTitle = styled.h3`
  margin-bottom: 10px;
`;

export const CartItemText = styled.p`
  margin-bottom: 10px;
`;

export const CartItemImgWrapper = styled.div`
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 0;
  }
`;

export const CartItemImg = styled.img`
  width: 100%;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    width: 120px;
    height: 90px;
    margin-right: 20px;
  }
`;

export const CartItemQuantityBtn = styled.button`
  width: 30px;
  padding: 5px;
  cursor: pointer;
  background-color: lightgrey;
  border: none;
  border-radius: 5px;
  text-align: center;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const CartItemQuantity = styled.div`
  width: 30px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`;

export const CartItemSum = styled.div`
  width: 100px;
  margin-right: 20px;
  text-align: center;
`;

export const CartItemDelBtn = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  text-align: center;
  color: grey;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  /* -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75); */
`;

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

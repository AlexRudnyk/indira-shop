import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { CartItem } from 'components/CartItem';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  CartPageSection,
  CartPageContainer,
  CartPageTitle,
  TotalSumText,
  CartPageList,
  MakeOrderWrapper,
  OrderBtn,
  TotalSumSpan,
  EmptyCartMessageWrapper,
  EmptyCartMessage,
  LoaderContainer,
} from './CartPage.styled';
import { useState } from 'react';
import axios from 'axios';
import { clearCart } from 'redux/auth/operations';

export const CartPage = () => {
  const { user, isRefreshing } = useAuth();
  const [totalSum, setTotalSum] = useState('');
  const dispatch = useDispatch();

  let totalSumArr = [];
  let goodsArray = [];

  const handleGetOrder = ({ title, price, quantity }) => {
    goodsArray.push({ title, price, quantity });
  };

  const getTotalSum = sum => {
    if (sum) {
      totalSumArr.push(sum);
    }
    const totalSumRes = totalSumArr.reduce((acc, sum) => acc + sum, 0);
    setTotalSum(totalSumRes);
  };

  const handleOrderClick = async () => {
    const mailBody = {
      user,
      goods: JSON.stringify(goodsArray),
      totalSum,
    };

    try {
      const { data } = await axios.post(
        'https://indira-backend.vercel.app/api/users/order',
        // 'http://localhost:3030/api/users/order',
        mailBody
      );
      dispatch(clearCart());
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  return isRefreshing ? (
    <LoaderContainer>
      <BeatLoader />
    </LoaderContainer>
  ) : (
    <CartPageSection $length={user.goodsInCart.length}>
      <CartPageContainer>
        {user.goodsInCart.length !== 0 ? (
          <>
            <CartPageTitle>Your goods in cart</CartPageTitle>
            <CartPageList>
              {user.goodsInCart.map(goodId => (
                <CartItem
                  goodId={goodId}
                  key={goodId}
                  getTotalSum={getTotalSum}
                  getOrder={handleGetOrder}
                />
              ))}
            </CartPageList>
            <MakeOrderWrapper>
              <TotalSumText>
                Your order is <TotalSumSpan>{totalSum}</TotalSumSpan> UAH
              </TotalSumText>
              <OrderBtn type="button" onClick={handleOrderClick}>
                Make order
              </OrderBtn>
            </MakeOrderWrapper>
          </>
        ) : (
          <EmptyCartMessageWrapper>
            <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
          </EmptyCartMessageWrapper>
        )}
      </CartPageContainer>
    </CartPageSection>
  );
};

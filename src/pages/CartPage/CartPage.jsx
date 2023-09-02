import { useAuth } from 'hooks';
import { CartItem } from 'components/CartItem';
import BeatLoader from 'react-spinners/BeatLoader';
import { OrderModal } from 'components/OrderModal';
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
import { useTranslation } from 'react-i18next';

export const CartPage = ({ cart, deleteFromCart, getCart }) => {
  const { user, isLoggedIn, isRefreshing } = useAuth();
  const [totalSum, setTotalSum] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation();

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

  const handleOrderModalClose = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleOrderSubmit = async ({ name, phone, email }) => {
    const mailBody = {
      name,
      phone,
      email,
      goods: JSON.stringify(goodsArray),
      totalSum,
    };

    try {
      const { data } = await axios.post(
        'https://indira-backend.vercel.app/api/users/order',
        // 'http://localhost:3030/api/users/order',
        mailBody
      );
      localStorage.removeItem('cart');
      getCart([]);
      return data;
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleMakeOrderClick = () => {
    if (isLoggedIn) {
      handleOrderSubmit({
        name: user.name,
        phone: user.phone,
        email: user.email,
      });
    } else {
      setIsModalOpen(!isModalOpen);
    }
  };

  return isRefreshing ? (
    <LoaderContainer>
      <BeatLoader />
    </LoaderContainer>
  ) : (
    <CartPageSection $length={cart.length}>
      <CartPageContainer>
        {cart.length !== 0 ? (
          <>
            <CartPageTitle>{t('Goods_in_cart')}</CartPageTitle>
            <CartPageList>
              {cart.map(goodId => (
                <CartItem
                  goodId={goodId}
                  key={goodId}
                  getTotalSum={getTotalSum}
                  getOrder={handleGetOrder}
                  deleteFromCart={deleteFromCart}
                />
              ))}
            </CartPageList>
            <MakeOrderWrapper>
              <TotalSumText>
                {t('Order_is')} <TotalSumSpan>{totalSum}</TotalSumSpan>{' '}
                {t('Currency')}
              </TotalSumText>
              <OrderBtn type="button" onClick={handleMakeOrderClick}>
                {t('Make_order')}
              </OrderBtn>
            </MakeOrderWrapper>
          </>
        ) : (
          <EmptyCartMessageWrapper>
            <EmptyCartMessage>{t('Cart_empty')}</EmptyCartMessage>
          </EmptyCartMessageWrapper>
        )}
      </CartPageContainer>
      {isModalOpen && (
        <OrderModal
          onClose={handleOrderModalClose}
          onSubmit={handleOrderSubmit}
        />
      )}
    </CartPageSection>
  );
};

import { useGoods } from 'hooks';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromCart } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import BeatLoader from 'react-spinners/BeatLoader';
import { ImBin2 } from 'react-icons/im';

import {
  CounterWrapper,
  CartItemLine,
  ChosenGoodWrapper,
  CartItemTitle,
  CartItemText,
  CartItemImgWrapper,
  CartItemImg,
  CartItemQuantityBtn,
  CartItemQuantity,
  CartItemSum,
  CartItemDelBtn,
  LoaderContainer,
} from './CartItem.styled';
import Media from 'react-media';

export const CartItem = ({ goodId, getTotalSum, getOrder }) => {
  const [good, setGood] = useState({});
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const { goods } = useGoods();
  const { isRefreshing } = useAuth();

  const sum = good.price * quantity;

  useEffect(() => {
    const { _id, title, text, description, photoURL, price } = goods?.find(
      item => item._id === goodId
    );
    setGood({ _id, title, text, description, photoURL, price });
    getTotalSum(sum);
    getOrder({ title, price, quantity });
  }, [getOrder, getTotalSum, goodId, goods, quantity, sum]);

  const handlePlusClick = () => {
    setQuantity(state => (state += 1));
  };

  const handleMinusClick = () => {
    setQuantity(state => (state -= 1));
  };

  const handleDeleteClick = () => {
    dispatch(deleteFromCart(goodId));
  };

  return isRefreshing ? (
    <LoaderContainer>
      <BeatLoader />
    </LoaderContainer>
  ) : (
    <Media
      queries={{
        // small: '(max-width: 767.98px)',
        medium: '(min-width: 768px)',
      }}
    >
      {matches => (
        <CartItemLine>
          <ChosenGoodWrapper>
            <CartItemImgWrapper>
              <CartItemImg src={good.photoURL} alt="good in cart" />
            </CartItemImgWrapper>
            {matches.medium && (
              <div>
                <CartItemTitle>{good.title}</CartItemTitle>
                <CartItemText>{good.text}</CartItemText>
              </div>
            )}
          </ChosenGoodWrapper>
          <CounterWrapper>
            <CartItemQuantityBtn
              type="button"
              onClick={handleMinusClick}
              disabled={quantity <= 1}
            >
              -
            </CartItemQuantityBtn>
            <CartItemQuantity>{quantity}</CartItemQuantity>
            <CartItemQuantityBtn type="button" onClick={handlePlusClick}>
              +
            </CartItemQuantityBtn>
          </CounterWrapper>
          <CartItemSum>{sum} UAH</CartItemSum>
          <div>
            <CartItemDelBtn type="button" onClick={handleDeleteClick}>
              <ImBin2 />
            </CartItemDelBtn>
          </div>
        </CartItemLine>
      )}
    </Media>
  );
};

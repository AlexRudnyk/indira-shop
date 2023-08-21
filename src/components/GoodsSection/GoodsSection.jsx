import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllGoods } from 'redux/goods/operations';
import { useGoods } from 'hooks';
import { GoodItem } from 'components/GoodItem';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  GoodsSectionContainer,
  GoodsList,
  GoodsItem,
  GoodsItemLink,
  LoaderContainer,
} from './GoodsSection.styled';

export const GoodsSection = () => {
  const dispatch = useDispatch();
  const { goods, isRefreshing } = useGoods();

  useEffect(() => {
    dispatch(getAllGoods());
  }, [dispatch]);

  return isRefreshing ? (
    <LoaderContainer>
      <BeatLoader />
    </LoaderContainer>
  ) : (
    <GoodsSectionContainer $length={goods.length}>
      {goods.length !== 0 && (
        <>
          <GoodsList>
            {goods.map(good => (
              <GoodsItem key={good._id}>
                <GoodsItemLink to={`/details/${good._id}`}>
                  <GoodItem good={good} />
                </GoodsItemLink>
              </GoodsItem>
            ))}
          </GoodsList>
        </>
      )}
    </GoodsSectionContainer>
  );
};

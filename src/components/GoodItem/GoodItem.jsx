import {
  GoodsItemWrapper,
  GoodsItemImg,
  GoodsItemTitle,
  GoodsItemText,
  DescriptionWrapper,
} from './GoodItem.styled';

export const GoodItem = ({ good }) => {
  return (
    <>
      <GoodsItemWrapper>
        <GoodsItemImg src={good.photoURL} alt="good" />
        <DescriptionWrapper>
          <div>
            <GoodsItemTitle>{good.title}</GoodsItemTitle>
            <GoodsItemText>{good.text}</GoodsItemText>
          </div>
          <div>
            <p>{good.price} UAH</p>
          </div>
        </DescriptionWrapper>
      </GoodsItemWrapper>
    </>
  );
};

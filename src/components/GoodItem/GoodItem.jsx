import {
  GoodsItemWrapper,
  GoodsItemImg,
  GoodsItemTitle,
  GoodsItemText,
  DescriptionWrapper,
} from './GoodItem.styled';
import { useTranslation } from 'react-i18next';

export const GoodItem = ({ good }) => {
  const { t } = useTranslation();

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
            <p>
              {good.price} {t('Currency')}
            </p>
          </div>
        </DescriptionWrapper>
      </GoodsItemWrapper>
    </>
  );
};

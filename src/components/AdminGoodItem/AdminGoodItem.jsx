import { useDispatch } from 'react-redux';
import { ImPencil, ImBin2 } from 'react-icons/im';
import {
  AdminGoodItemWrapper,
  AdminGoodItemImg,
  AdminGoodItemLine,
  AdminGoodItemText,
  AdminGoodItemPrice,
  AdminGoodItemBtn,
  AdminTextWrapper,
  ImgTextWrapper,
  ButtonsWrapper,
} from './AdminGoodItem.styled';
import { deleteGood, editGood } from 'redux/goods/operations';
import { useState } from 'react';
import { ModalEditGood } from 'components/ModalEditGood';
import Media from 'react-media';

export const AdminGoodItem = ({ good }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEditGoodClick = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleEditModalClose = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleEditModalSubmit = values => {
    dispatch(editGood(values));
  };

  const handleDeleteGoodClick = () => {
    dispatch(deleteGood(good._id));
  };

  return (
    <Media
      queries={{
        small: '(max-width: 767.98px)',
        medium: '(min-width: 768px)',
      }}
    >
      {matches => (
        <AdminGoodItemLine>
          <AdminGoodItemWrapper>
            {matches.small && (
              <>
                <ImgTextWrapper>
                  <AdminGoodItemImg src={good.photoURL} alt="good" />
                  <AdminTextWrapper>
                    <AdminGoodItemText>{good.title}</AdminGoodItemText>
                    <AdminGoodItemPrice>{good.price} UAH</AdminGoodItemPrice>
                  </AdminTextWrapper>
                </ImgTextWrapper>
                <ButtonsWrapper>
                  <AdminGoodItemBtn type="button" onClick={handleEditGoodClick}>
                    <ImPencil />
                  </AdminGoodItemBtn>
                  <AdminGoodItemBtn
                    type="button"
                    onClick={handleDeleteGoodClick}
                  >
                    <ImBin2 />
                  </AdminGoodItemBtn>
                </ButtonsWrapper>
                {isEditModalOpen && (
                  <ModalEditGood
                    onClose={handleEditModalClose}
                    onSubmit={handleEditModalSubmit}
                    good={good}
                  />
                )}
              </>
            )}
            {matches.medium && (
              <>
                <AdminGoodItemImg src={good.photoURL} alt="good" />
                <AdminTextWrapper>
                  <AdminGoodItemText>{good.title}</AdminGoodItemText>
                  <AdminGoodItemPrice>{good.price} UAH</AdminGoodItemPrice>
                </AdminTextWrapper>
                <AdminGoodItemBtn type="button" onClick={handleEditGoodClick}>
                  <ImPencil />
                </AdminGoodItemBtn>
                <AdminGoodItemBtn type="button" onClick={handleDeleteGoodClick}>
                  <ImBin2 />
                </AdminGoodItemBtn>
                {isEditModalOpen && (
                  <ModalEditGood
                    onClose={handleEditModalClose}
                    onSubmit={handleEditModalSubmit}
                    good={good}
                  />
                )}
              </>
            )}
          </AdminGoodItemWrapper>
        </AdminGoodItemLine>
      )}
    </Media>
  );
};

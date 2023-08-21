import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BeatLoader from 'react-spinners/BeatLoader';
import {
  GoodDetailsWrapper,
  GoodDetailsImgContainer,
  GoodDetailsDescriptionContainer,
  GoodDetailsImg,
  GoodDetailsTitle,
  GoodDetailsText,
  GoodDetailsBtn,
  LoaderContainer,
  CommentClickWrapper,
  CommentsWrapper,
  CommentClick,
  AddCommentClick,
} from './GoodDetailsItem.styled';
import { useDispatch } from 'react-redux';
import { useAuth, useComments } from 'hooks';
import { toast } from 'react-toastify';
import { CommentItem } from 'components/CommentItem';
import { addComment, getComments } from 'redux/comments/operations';
import { AddCommentModal } from 'components/AddCommentModal';

export const GoodDetailsItem = ({ isShowCommentOpen, cart, getCart }) => {
  const { id } = useParams();
  const [good, setGood] = useState({});
  const [status, setStatus] = useState('IDLE');
  const [showComment, setShowComment] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useAuth();
  const { comments } = useComments();

  const reversedComments = [...comments].reverse();

  useEffect(() => {
    async function getGood() {
      setStatus('PENDING');
      try {
        const { data } = await axios.get(
          `https://indira-backend.vercel.app/api/goods/id/${id}`
          // `http://localhost:3030/api/goods/id/${id}`
        );
        setGood(data);
        setStatus('FULFILLED');
      } catch (error) {
        console.log(error.message);
        setStatus('REJECTED');
      }
    }
    getGood();
  }, [id]);

  useEffect(() => {
    dispatch(getComments(id));
  }, [dispatch, id]);

  const handleAddCartClick = () => {
    const isInCart = cart.includes(id);
    if (isInCart) {
      return;
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, id]));
      getCart([...cart, id]);
    }
  };

  const handleShowCommentClick = () => {
    setShowComment(!showComment);
  };

  const handleModalAddCommentClick = () => {
    if (isLoggedIn) {
      setIsCommentModalOpen(!isCommentModalOpen);
    } else {
      toast.warning('Please login to leave a comment');
    }
  };

  const handleAddCommentModalClose = () => {
    setIsCommentModalOpen(!isCommentModalOpen);
  };

  const handleAddCommentModalSubmit = values => {
    dispatch(addComment({ id, values }));
  };

  useEffect(() => {
    isShowCommentOpen(showComment);
  }, [isShowCommentOpen, showComment]);

  // useEffect(() => {
  //   getCount(cart.length);
  // }, [cart.length, getCount]);

  return status === 'PENDING' ? (
    <LoaderContainer>
      <BeatLoader />
    </LoaderContainer>
  ) : (
    good && status === 'FULFILLED' && (
      <>
        <GoodDetailsWrapper>
          <GoodDetailsImgContainer>
            <GoodDetailsImg src={good.photoURL} alt="good" />
          </GoodDetailsImgContainer>
          <GoodDetailsDescriptionContainer>
            <GoodDetailsTitle>{good.title}</GoodDetailsTitle>
            <GoodDetailsText>{good.text}</GoodDetailsText>
            <GoodDetailsText>{good.description}</GoodDetailsText>
            <GoodDetailsText>Price: {good.price} UAH</GoodDetailsText>
            {user.role !== 'admin' && (
              <GoodDetailsBtn type="button" onClick={handleAddCartClick}>
                Add to Cart
              </GoodDetailsBtn>
            )}
            <CommentClickWrapper>
              <CommentClick
                onClick={handleShowCommentClick}
                $length={comments?.length}
              >
                Comments ({comments?.length})
              </CommentClick>
              {user.role !== 'admin' && (
                <AddCommentClick onClick={handleModalAddCommentClick}>
                  Add comment
                </AddCommentClick>
              )}
            </CommentClickWrapper>
          </GoodDetailsDescriptionContainer>
        </GoodDetailsWrapper>
        {showComment && (
          <CommentsWrapper>
            <ul>
              {reversedComments?.map(comment => (
                <CommentItem key={comment._id} comment={comment} />
              ))}
            </ul>
          </CommentsWrapper>
        )}
        {isCommentModalOpen && (
          <AddCommentModal
            onSubmit={handleAddCommentModalSubmit}
            onClose={handleAddCommentModalClose}
          />
        )}
      </>
    )
  );
};

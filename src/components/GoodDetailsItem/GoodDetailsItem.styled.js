import styled from 'styled-components';

export const GoodDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const GoodDetailsImgContainer = styled.div`
  border-radius: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 50px;
    margin-bottom: 0;
  }
`;

export const GoodDetailsDescriptionContainer = styled.div`
  width: 100%;
`;

export const GoodDetailsImg = styled.img`
  width: 100%;
  border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 300px;
  }

  @media screen and (min-width: 1280px) {
    width: 400px;
  }
`;

export const GoodDetailsTitle = styled.h1`
  margin-bottom: 30px;
`;

export const GoodDetailsText = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const GoodDetailsBtn = styled.button`
  padding: 10px;
  cursor: pointer;
  background-color: #b36c40;
  border: none;
  border-radius: 10px;
  text-align: center;
  color: white;
  margin-bottom: 20px;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CommentsWrapper = styled.div``;

export const CommentClickWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CommentClick = styled.div`
  padding: 5px 0;
  width: 110px;
  cursor: pointer;
  color: inherit;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: brown;
  }

  pointer-events: ${({ $length }) => ($length ? 'auto' : 'none')};
`;

export const AddCommentClick = styled.div`
  padding: 5px 0;
  width: 110px;
  cursor: pointer;
  color: inherit;
  transition: color 0.2s ease-in-out;

  &:hover,
  &:focus {
    color: brown;
  }
`;

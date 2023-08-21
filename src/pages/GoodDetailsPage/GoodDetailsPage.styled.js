import styled from 'styled-components';

export const GoodDetailsPageSection = styled.section`
  background: linear-gradient(to bottom right, #b36c40, white);

  @media screen and (max-width: 767.98px) {
    /* height: ${props =>
      props.$isCommentOpen || props.$length ? '100%' : '100vh'}; */
  }

  @media screen and (min-width: 768px) {
    height: ${props =>
      props.$isCommentOpen || props.$length ? '100%' : '100vh'};
  }
`;

export const GoodDetailsContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 105px;
  padding-bottom: 30px;

  @media screen and (max-width: 767.98px) {
    max-width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 728px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 130px;
  }

  @media screen and (min-width: 1280px) {
    width: 1240px;
  }
`;

export const LoaderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #b36c40, white);
`;

import styled from 'styled-components';

export const GoodsItemWrapper = styled.div`
  border-radius: 20px;
  background-color: #fff;
`;

export const GoodsItemImg = styled.img`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  @media screen and (min-width: 768px) {
    /* height: 305px; */
  }
`;

export const GoodsItemTitle = styled.h3`
  margin-bottom: 15px;
`;

export const GoodsItemText = styled.p``;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  height: 140px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

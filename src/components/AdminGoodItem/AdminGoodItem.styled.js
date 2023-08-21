import styled from 'styled-components';

export const AdminGoodItemLine = styled.li`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
  border-radius: 10px;
  padding: 10px;
  background-color: #fff;
  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);

  @media screen and (min-width: 768px) {
    width: 700px;
  }
`;

export const AdminGoodItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const AdminGoodItemImg = styled.img`
  width: 100px;
  border-radius: 10px;
  margin-right: 30px;
`;

export const AdminGoodItemText = styled.p`
  width: 150px;
  margin-right: 30px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`;

export const AdminGoodItemPrice = styled.p`
  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }
`;

export const AdminGoodItemBtn = styled.button`
  width: 70px;
  padding: 10px;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 30px;
  }
  background-color: transparent;
  border: none;
  border-radius: 10px;
  text-align: center;
  /* font-family: inherit; */
  color: grey;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  /* -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75); */
`;

export const AdminTextWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
`;

export const ImgTextWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

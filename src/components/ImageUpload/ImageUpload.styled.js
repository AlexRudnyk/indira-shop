import styled from 'styled-components';

export const UploadLabel = styled.label`
  cursor: pointer;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  border-bottom: 1px solid black;
  padding: 20px 0;
`;

export const UploadText = styled.div`
  width: 100px;
  padding: 10px;

  background-color: #b36c40;
  border: none;
  border-radius: 10px;
  text-align: center;
  font-family: inherit;
  color: white;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }

  -webkit-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 27px 0px rgba(0, 0, 0, 0.75);
`;

export const PreviewWrapper = styled.div`
  margin-bottom: 30px;
`;

export const PreviewImgWrapper = styled.div`
  position: relative;
  width: 130px;
  margin-bottom: 10px;
`;

export const PreviewImg = styled.img`
  width: 100%;
`;

export const PreviewImgSuccess = styled.img`
  position: absolute;
  top: 0;
  right: -30px;
  width: 20px;
  display: ${props => (props.$isUploaded ? 'block' : 'none')};
`;

export const PreviewBtn = styled.button`
  padding: 5px;
  width: 60px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  border: none;
  border-radius: 10px;
  text-align: center;
  font-family: inherit;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

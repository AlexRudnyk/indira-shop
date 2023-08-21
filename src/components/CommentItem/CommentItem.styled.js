import styled from 'styled-components';

export const CommentListItem = styled.li`
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  -webkit-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 7px 15px 20px 0px rgba(0, 0, 0, 0.6);
`;

export const CommentListItemName = styled.p`
  margin-bottom: 20px;
  color: grey;
`;

export const CommentListItemText = styled.p`
  margin-bottom: 10px;
`;

export const CommentListItemdate = styled.p`
  text-align: end;
  color: lightgrey;
`;

export const AdminCommentWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AdminCommentBtn = styled.button`
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
  color: grey;

  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    transform: scale(1.1);
  }
`;

export const ReplyWrapper = styled.div`
  border-top: 2px solid lightgrey;
  padding: 20px 0;
  margin-top: 10px;
`;

export const ReplyAdminName = styled.p`
  color: grey;
  margin-bottom: 20px;
`;

export const ReplyText = styled.p``;

import { useAuth } from 'hooks';
import { ImPencil, ImBin2 } from 'react-icons/im';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { ReplyModal } from 'components/ReplyModal';
import {
  CommentListItem,
  CommentListItemName,
  CommentListItemText,
  CommentListItemdate,
  AdminCommentWrapper,
  AdminCommentBtn,
  ReplyWrapper,
  ReplyAdminName,
  ReplyText,
} from './CommentItem.styled';
import { deleteComment, replyComment } from 'redux/comments/operations';

export const CommentItem = ({ comment }) => {
  const id = comment._id;
  const { user } = useAuth();
  const date = new Date(comment.createdAt).toLocaleDateString();
  const dispatch = useDispatch();
  const [replyModalIsOpen, setReplyModalIsOpen] = useState(false);

  const handleCommentReplyClick = () => {
    setReplyModalIsOpen(!replyModalIsOpen);
  };

  const handleCommentDeleteClick = () => {
    dispatch(deleteComment(id));
  };

  const handleReplyModalClose = () => {
    setReplyModalIsOpen(!replyModalIsOpen);
  };

  const handleReplyModalSubmit = values => {
    if (user.role === 'admin') {
      dispatch(replyComment({ id, values }));
    }
  };

  return (
    <CommentListItem>
      <CommentListItemName>{comment.userName}</CommentListItemName>
      <CommentListItemText>{comment.text}</CommentListItemText>
      <CommentListItemdate>{date}</CommentListItemdate>
      {comment.reply && (
        <ReplyWrapper>
          <ReplyAdminName>Anna</ReplyAdminName>
          <ReplyText>{comment.reply}</ReplyText>
        </ReplyWrapper>
      )}
      {user.role === 'admin' && (
        <AdminCommentWrapper>
          <AdminCommentBtn type="button" onClick={handleCommentReplyClick}>
            <ImPencil />
          </AdminCommentBtn>
          <AdminCommentBtn type="button" onClick={handleCommentDeleteClick}>
            <ImBin2 />
          </AdminCommentBtn>
        </AdminCommentWrapper>
      )}
      {replyModalIsOpen && (
        <ReplyModal
          onSubmit={handleReplyModalSubmit}
          onClose={handleReplyModalClose}
        />
      )}
    </CommentListItem>
  );
};

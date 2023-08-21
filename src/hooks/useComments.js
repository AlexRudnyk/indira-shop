import { useSelector } from 'react-redux';

import {
  selectComments,
  selectIsRefreshing,
  selectError,
} from '../redux/comments/selectors';

export const useComments = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const comments = useSelector(selectComments);
  const error = useSelector(selectError);

  return {
    comments,
    isRefreshing,
    error,
  };
};

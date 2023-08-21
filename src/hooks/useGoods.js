import { useSelector } from 'react-redux';

import {
  selectGoods,
  selectIsRefreshing,
  selectError,
} from '../redux/goods/selectors';

export const useGoods = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const goods = useSelector(selectGoods);
  const error = useSelector(selectError);

  return {
    goods,
    isRefreshing,
    error,
  };
};

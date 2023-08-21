import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import {
  UserNavLogoutBtn,
  UserNavWrapper,
  UserGreetingText,
  UserNavLink,
  CartLinkWrapper,
  GoodsInCartIndicator,
  IndicatorText,
} from './UserNav.styled';

export const UserNav = ({ cart }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    dispatch(logout());
  };

  return (
    <UserNavWrapper>
      <UserGreetingText>Hello, {user.name}</UserGreetingText>
      <UserNavLogoutBtn type="button" onClick={handleLogoutClick}>
        Logout
      </UserNavLogoutBtn>
      {user.role === 'admin' ? (
        <UserNavLink to="/admin">Admin</UserNavLink>
      ) : (
        <CartLinkWrapper>
          <UserNavLink to="/cart">Cart</UserNavLink>
          {cart.length > 0 && (
            <GoodsInCartIndicator>
              <IndicatorText>{cart.length}</IndicatorText>
            </GoodsInCartIndicator>
          )}
        </CartLinkWrapper>
      )}
    </UserNavWrapper>
  );
};

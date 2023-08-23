import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/auth/operations';
import Media from 'react-media';
import {
  UserNavLogoutBtn,
  UserNavWrapper,
  UserGreetingText,
  UserNavLink,
} from './UserNav.styled';

export const UserNav = ({ closeAfterClick, isMenuOpen }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogoutClick = () => {
    if (isMenuOpen) {
      dispatch(logout());
      closeAfterClick();
    } else {
      dispatch(logout());
    }
  };

  return (
    <Media
      queries={{
        small: '(max-width: 767.98px)',
        medium: '(min-width: 768px)',
      }}
    >
      {matches => (
        <>
          {matches.small && (
            <UserNavWrapper>
              <UserNavLogoutBtn type="button" onClick={handleLogoutClick}>
                Logout
              </UserNavLogoutBtn>
              {user.role === 'admin' && (
                <UserNavLink to="/admin" onClick={closeAfterClick}>
                  Admin
                </UserNavLink>
              )}
            </UserNavWrapper>
          )}
          {matches.medium && (
            <UserNavWrapper>
              <UserGreetingText>Hello, {user.name}</UserGreetingText>
              <UserNavLogoutBtn type="button" onClick={handleLogoutClick}>
                Logout
              </UserNavLogoutBtn>
              {user.role === 'admin' && (
                <UserNavLink to="/admin">Admin</UserNavLink>
              )}
            </UserNavWrapper>
          )}
        </>
      )}
    </Media>
  );
};

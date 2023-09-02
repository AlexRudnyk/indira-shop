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
import { useTranslation } from 'react-i18next';

export const UserNav = ({ closeAfterClick, isMenuOpen }) => {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
                {t('Logout')}
              </UserNavLogoutBtn>
              {user.role === 'admin' && (
                <UserNavLink to="/admin" onClick={closeAfterClick}>
                  {t('Admin')}
                </UserNavLink>
              )}
            </UserNavWrapper>
          )}
          {matches.medium && (
            <UserNavWrapper>
              <UserGreetingText>
                {t('Hello')}, {user.name}
              </UserGreetingText>
              <UserNavLogoutBtn type="button" onClick={handleLogoutClick}>
                {t('Logout')}
              </UserNavLogoutBtn>
              {user.role === 'admin' && (
                <UserNavLink to="/admin">{t('Admin')}</UserNavLink>
              )}
            </UserNavWrapper>
          )}
        </>
      )}
    </Media>
  );
};

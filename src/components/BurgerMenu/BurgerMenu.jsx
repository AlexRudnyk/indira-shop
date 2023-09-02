import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';
import {
  BurgerMenuWrapper,
  CloseSvg,
  NavHomeLink,
  LinksWrapper,
} from './BurgerMenu.styled';
import { UserNav } from 'components/UserNav';
import { useTranslation } from 'react-i18next';

export const BurgerMenu = ({ onClose, isMenuOpen }) => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  const handleMenuClose = () => {
    onClose();
  };

  return (
    <BurgerMenuWrapper>
      <CloseSvg onClick={handleMenuClose} />
      <LinksWrapper>
        <NavHomeLink to="/" onClick={handleMenuClose}>
          {t('Home')}
        </NavHomeLink>
        {isLoggedIn ? (
          <UserNav closeAfterClick={handleMenuClose} isMenuOpen={isMenuOpen} />
        ) : (
          <AuthNav closeAfterClick={handleMenuClose} />
        )}
      </LinksWrapper>
    </BurgerMenuWrapper>
  );
};

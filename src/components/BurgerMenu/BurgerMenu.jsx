import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';
import {
  BurgerMenuWrapper,
  CloseSvg,
  NavHomeLink,
  LinksWrapper,
} from './BurgerMenu.styled';
import { UserNav } from 'components/UserNav';

export const BurgerMenu = ({ onClose }) => {
  const { isLoggedIn } = useAuth();

  const handleMenuClose = () => {
    onClose();
  };

  return (
    <BurgerMenuWrapper>
      <CloseSvg onClick={handleMenuClose} />
      <LinksWrapper>
        <NavHomeLink to="/" onClick={handleMenuClose}>
          Home
        </NavHomeLink>
        {isLoggedIn ? (
          <UserNav closeAfterClick={handleMenuClose} />
        ) : (
          <AuthNav closeAfterClick={handleMenuClose} />
        )}
      </LinksWrapper>
    </BurgerMenuWrapper>
  );
};
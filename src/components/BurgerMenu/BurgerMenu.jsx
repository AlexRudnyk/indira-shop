import { AuthNav } from 'components/AuthNav';
import {
  BurgerMenuWrapper,
  CloseSvg,
  NavHomeLink,
  LinksWrapper,
} from './BurgerMenu.styled';

export const BurgerMenu = ({ onClose }) => {
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
        <AuthNav closeAfterClick={handleMenuClose} />
      </LinksWrapper>
    </BurgerMenuWrapper>
  );
};

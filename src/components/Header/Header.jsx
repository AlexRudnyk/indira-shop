import { UserNav } from 'components/UserNav';
import { AuthNav } from 'components/AuthNav';
import { useAuth } from 'hooks';
import Mandala from 'images/mandala.png';
import Media from 'react-media';
import {
  HeaderSection,
  Container,
  HeaderWrapper,
  LogoLinksWrapper,
  NameWrapper,
  NavWrapper,
  Logo,
  NavHomeLink,
  LogoImg,
  UserNavLink,
  CartLinkWrapper,
  GoodsInCartIndicator,
  IndicatorText,
  BurgerImg,
} from './Header.styled';
import { useState } from 'react';
import { BurgerMenu } from 'components/BurgerMenu';

export const Header = ({ cart }) => {
  const { user, isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClickToggle = () => {
    setIsMenuOpen(!isMenuOpen);
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
            <HeaderSection>
              <Container>
                <HeaderWrapper>
                  <LogoLinksWrapper>
                    <Logo to="/">Indira</Logo>
                  </LogoLinksWrapper>
                  {isLoggedIn && (
                    <NameWrapper>
                      <p>Hello, {user.name}</p>
                    </NameWrapper>
                  )}
                  <NavWrapper>
                    {user.role !== 'admin' && (
                      <CartLinkWrapper>
                        <UserNavLink to="/cart">Cart</UserNavLink>
                        {cart.length > 0 && (
                          <GoodsInCartIndicator>
                            <IndicatorText>{cart.length}</IndicatorText>
                          </GoodsInCartIndicator>
                        )}
                      </CartLinkWrapper>
                    )}
                    <BurgerImg onClick={handleBurgerClickToggle} />
                  </NavWrapper>
                  <LogoImg src={Mandala} alt="mandala" />
                  {isMenuOpen && (
                    <BurgerMenu onClose={handleBurgerClickToggle} />
                  )}
                </HeaderWrapper>
              </Container>
            </HeaderSection>
          )}
          {matches.medium && (
            <HeaderSection>
              <Container>
                <HeaderWrapper>
                  <LogoLinksWrapper>
                    <Logo to="/">Indira</Logo>
                    <NavHomeLink to="/">Home</NavHomeLink>
                  </LogoLinksWrapper>
                  <NavWrapper>
                    {isLoggedIn ? <UserNav /> : <AuthNav />}
                    {user.role !== 'admin' && (
                      <CartLinkWrapper>
                        <UserNavLink to="/cart">Cart</UserNavLink>
                        {cart.length > 0 && (
                          <GoodsInCartIndicator>
                            <IndicatorText>{cart.length}</IndicatorText>
                          </GoodsInCartIndicator>
                        )}
                      </CartLinkWrapper>
                    )}
                  </NavWrapper>
                  <LogoImg src={Mandala} alt="mandala" />
                </HeaderWrapper>
              </Container>
            </HeaderSection>
          )}
        </>
      )}
    </Media>
  );
};

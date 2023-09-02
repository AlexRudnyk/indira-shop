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
import { LangSwitcher } from 'components/LangSwitcher';
import { useTranslation } from 'react-i18next';

export const Header = ({ cart }) => {
  const { user, isLoggedIn } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

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
                      <p>
                        {t('Hello')}, {user.name}
                      </p>
                    </NameWrapper>
                  )}
                  <LangSwitcher />
                  <NavWrapper>
                    {user.role !== 'admin' && (
                      <CartLinkWrapper>
                        <UserNavLink to="/cart">{t('Cart')}</UserNavLink>
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
                    <BurgerMenu
                      onClose={handleBurgerClickToggle}
                      isMenuOpen={isMenuOpen}
                    />
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
                    <NavHomeLink to="/">{t('Home')}</NavHomeLink>
                  </LogoLinksWrapper>
                  <LangSwitcher />
                  <NavWrapper>
                    {isLoggedIn ? <UserNav /> : <AuthNav />}
                    {user.role !== 'admin' && (
                      <CartLinkWrapper>
                        <UserNavLink to="/cart">{t('Cart')}</UserNavLink>
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

import { AuthNavLink } from './AuthNav.styled';
import Media from 'react-media';
import { useTranslation } from 'react-i18next';

export const AuthNav = ({ closeAfterClick }) => {
  const { t } = useTranslation();

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
            <>
              <AuthNavLink to="/login" onClick={closeAfterClick}>
                {t('Login')}
              </AuthNavLink>
              <AuthNavLink to="/register" onClick={closeAfterClick}>
                {t('Register')}
              </AuthNavLink>
            </>
          )}
          {matches.medium && (
            <>
              <AuthNavLink to="/login">{t('Login')}</AuthNavLink>
              <AuthNavLink to="/register">{t('Register')}</AuthNavLink>
            </>
          )}
        </>
      )}
    </Media>
  );
};

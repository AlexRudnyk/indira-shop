import { AuthNavLink } from './AuthNav.styled';
import Media from 'react-media';

export const AuthNav = ({ closeAfterClick }) => {
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
                Login
              </AuthNavLink>
              <AuthNavLink to="/register" onClick={closeAfterClick}>
                Register
              </AuthNavLink>
            </>
          )}
          {matches.medium && (
            <>
              <AuthNavLink to="/login">Login</AuthNavLink>
              <AuthNavLink to="/register">Register</AuthNavLink>
            </>
          )}
        </>
      )}
    </Media>
  );
};

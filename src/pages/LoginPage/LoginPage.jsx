import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import {
  LoginPageSection,
  LoginPageContainer,
  LoginPageForm,
  LoginPageInput,
  LoginPageBtn,
  LoginFormWrapper,
  LoginPageTitle,
  LoginPageWrapper,
} from './LoginPage.styled';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      i18n.t('Available_latin_based')
    )
    .min(5, i18n.t('Atleast_5'))
    .max(63, i18n.t('Email_length'))
    .required(i18n.t('Email_required')),
  password: yup
    .string()
    .min(7, i18n.t('Atleast_7'))
    .max(12, i18n.t('Password_length'))
    .matches(/^[a-zA-Z0-9!@#$%^&*()\-_=+{};:,<.>/?]*$/, i18n.t('Only_latinic'))
    .required(i18n.t('Password_required')),
});

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async ({ email, password }, { resetForm }) => {
    try {
      dispatch(login({ email, password }));

      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <LoginPageSection>
      <LoginPageContainer>
        <LoginPageWrapper>
          <LoginPageTitle>{t('Please_Login')}</LoginPageTitle>
          <LoginFormWrapper>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              <LoginPageForm>
                <LoginPageInput
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                />
                <ErrorMessage name="email" />

                <LoginPageInput
                  type="password"
                  name="password"
                  placeholder={t('Auth_password')}
                />
                <ErrorMessage name="password" />

                <LoginPageBtn type="submit">{t('Login')}</LoginPageBtn>
              </LoginPageForm>
            </Formik>
          </LoginFormWrapper>
        </LoginPageWrapper>
      </LoginPageContainer>
    </LoginPageSection>
  );
};

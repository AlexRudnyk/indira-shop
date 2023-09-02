import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signup, login } from '../../redux/auth/operations';
import {
  RegisterPageSection,
  RegisterPageContainer,
  RegisterPageWrapper,
  RegisterPageTitle,
  RegisterFormWrapper,
  RegisterPageForm,
  RegisterPageInput,
  RegisterPageBtn,
} from './RegisterPage.styled';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(16, i18n.t('Less_than_16'))
    .required(i18n.t('Name_required')),
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
  phone: yup
    .string()
    .matches(/^\+380\d{9}$/)
    .required(i18n.t('Phone_required')),
  password: yup
    .string()
    .min(7, i18n.t('Atleast_7'))
    .max(12, i18n.t('Password_length'))
    .matches(/^[a-zA-Z0-9!@#$%^&*()\-_=+{};:,<.>/?]*$/, i18n.t('Only_latinic'))
    .required(i18n.t('Password_required')),
});

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const initialValues = {
    name: '',
    email: '',
    password: '',
    phone: '',
  };

  const handleSubmit = async (
    { name, email, phone, password },
    { resetForm }
  ) => {
    try {
      const resultSignup = await dispatch(
        signup({ name, email, phone, password })
      );

      if (resultSignup.type === 'auth/signup/fulfilled') {
        await dispatch(login({ email, password }));
      }
      if (resultSignup.type === 'auth/signup/rejected') {
      }
      resetForm();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <RegisterPageSection>
      <RegisterPageContainer>
        <RegisterPageWrapper>
          <RegisterPageTitle>{t('Please_Register')}</RegisterPageTitle>
          <RegisterFormWrapper>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}
            >
              <RegisterPageForm>
                <RegisterPageInput
                  type="text"
                  name="name"
                  placeholder={t('John_Doe')}
                />
                <ErrorMessage name="name" />

                <RegisterPageInput
                  type="text"
                  name="phone"
                  placeholder="+380671112233"
                />
                <ErrorMessage name="phone" />

                <RegisterPageInput
                  type="email"
                  name="email"
                  placeholder="example@mail.com"
                />
                <ErrorMessage name="email" />

                <RegisterPageInput
                  type="password"
                  name="password"
                  placeholder={t('Auth_password')}
                />
                <ErrorMessage name="password" />

                <RegisterPageBtn type="submit">{t('Register')}</RegisterPageBtn>
              </RegisterPageForm>
            </Formik>
          </RegisterFormWrapper>
        </RegisterPageWrapper>
      </RegisterPageContainer>
    </RegisterPageSection>
  );
};

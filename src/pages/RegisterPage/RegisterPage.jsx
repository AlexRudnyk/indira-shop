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

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(16, 'must be less than 16 characters')
    .required(),
  email: yup
    .string()
    .email()
    .matches(
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      'available latin-based alphabet, numeric character and _ . + -'
    )
    .min(5, 'must be at least 5 characters')
    .max(63, 'email length must be less than 63 characters')
    .required(),
  phone: yup.string().matches(/^\+380\d{9}$/),
  password: yup
    .string()
    .min(7, 'must be at least 7 characters')
    .max(12, 'password length must be less than 12 characters')
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()\-_=+{};:,<.>/?]*$/,
      'only latinic letters. whitespaces are forbidden'
    )
    .required(),
});

export const RegisterPage = () => {
  const dispatch = useDispatch();

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
          <RegisterPageTitle>Please Register</RegisterPageTitle>
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
                  placeholder="John Doe"
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
                  placeholder="Please enter your password"
                />
                <ErrorMessage name="password" />

                <RegisterPageBtn type="submit">Register</RegisterPageBtn>
              </RegisterPageForm>
            </Formik>
          </RegisterFormWrapper>
        </RegisterPageWrapper>
      </RegisterPageContainer>
    </RegisterPageSection>
  );
};

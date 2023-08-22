import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import * as yup from 'yup';
import {
  Backdrop,
  ModalWindow,
  ButtonClose,
  CloseSvg,
  OrderModalWrapper,
  OrderModalForm,
  OrderModalInput,
  OrderModalBtn,
} from './OrderModal.styled';
import { ErrorMessage, Formik } from 'formik';

const modalRoot = document.querySelector('#modal-root');

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(30, 'must be less than 30 characters')
    .required(),
  phone: yup.string().min(10, 'must be at least 10 characters').required(),
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
});

export const OrderModal = ({ onClose, onSubmit }) => {
  //   const [description, setDescription] = useState(good.description);

  useEffect(() => {
    const onEscClick = e => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', onEscClick);

    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) onClose();
  };

  const handleSubmit = values => {
    onSubmit(values);
    onClose();
  };

  const initialValues = {
    name: '',
    phone: '',
    email: '',
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <ButtonClose type="button" onClick={onClose}>
          <CloseSvg />
        </ButtonClose>
        <OrderModalWrapper>
          <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ values }) => (
              <OrderModalForm>
                <OrderModalInput
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <ErrorMessage name="name" />

                <OrderModalInput
                  type="text"
                  name="phone"
                  placeholder="Enter your phone"
                />
                <ErrorMessage name="phone" />

                <OrderModalInput
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <ErrorMessage name="email" />

                <OrderModalBtn type="submit">Order</OrderModalBtn>
              </OrderModalForm>
            )}
          </Formik>
        </OrderModalWrapper>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

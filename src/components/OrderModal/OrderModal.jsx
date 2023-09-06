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
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

const modalRoot = document.querySelector('#modal-root');

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(30, i18n.t('Less_30'))
    .required(i18n.t('Name_required')),
  phone: yup
    .string()
    .min(10, i18n.t('Atleast_10'))
    .required(i18n.t('Phone_required')),
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
});

export const OrderModal = ({ onClose, onSubmit }) => {
  const { t } = useTranslation();

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
                  placeholder={t('Name_enter')}
                />
                <ErrorMessage name="name" />

                <OrderModalInput
                  type="text"
                  name="phone"
                  placeholder={t('Phone_enter')}
                />
                <ErrorMessage name="phone" />

                <OrderModalInput
                  type="email"
                  name="email"
                  placeholder={t('Email_enter')}
                />
                <ErrorMessage name="email" />

                <OrderModalBtn type="submit">{t('Order')}</OrderModalBtn>
              </OrderModalForm>
            )}
          </Formik>
        </OrderModalWrapper>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

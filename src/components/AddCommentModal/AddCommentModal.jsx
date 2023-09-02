import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ErrorMessage, Formik } from 'formik';
import {
  AddCommentBtn,
  AddCommentForm,
  AddCommentTextArea,
  AddcommentModalWrapper,
  Backdrop,
  ButtonClose,
  CloseSvg,
  ModalWindow,
} from './AddCommentModal.styled';
import { useTranslation } from 'react-i18next';

const modalRoot = document.querySelector('#modal-root');

export const AddCommentModal = ({ onClose, onSubmit }) => {
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
    text: '',
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <ButtonClose type="button" onClick={onClose}>
          <CloseSvg />
        </ButtonClose>
        <AddcommentModalWrapper>
          <Formik
            // validationSchema={schema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <AddCommentForm>
                <AddCommentTextArea
                  as="textarea"
                  type="text"
                  name="text"
                  rows="3"
                  onChange={e => {
                    setFieldValue('text', e.target.value);
                  }}
                />
                <ErrorMessage name="text" />

                <AddCommentBtn type="submit">
                  {t('Leave_comment')}
                </AddCommentBtn>
              </AddCommentForm>
            )}
          </Formik>
        </AddcommentModalWrapper>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ErrorMessage, Formik } from 'formik';
import {
  Backdrop,
  ButtonClose,
  CloseSvg,
  ModalWindow,
  ReplyBtn,
  ReplyModalForm,
  ReplyModalTextArea,
  ReplyModalWrapper,
} from './ReplyModal.styled';

const modalRoot = document.querySelector('#modal-root');

export const ReplyModal = ({ onClose, onSubmit }) => {
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
        <ReplyModalWrapper>
          <Formik
            // validationSchema={schema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <ReplyModalForm>
                <ReplyModalTextArea
                  as="textarea"
                  type="text"
                  name="text"
                  rows="3"
                  onChange={e => {
                    setFieldValue('text', e.target.value);
                  }}
                />
                <ErrorMessage name="text" />

                <ReplyBtn type="submit">Reply</ReplyBtn>
              </ReplyModalForm>
            )}
          </Formik>
        </ReplyModalWrapper>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

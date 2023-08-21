import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Backdrop,
  ModalWindow,
  ButtonClose,
  CloseSvg,
  AdminPageWrapper,
  AdminPageForm,
  AdminPageInput,
  AdminPageBtn,
  AdminPageTextArea,
} from './ModalEditGood.styled';
import { ErrorMessage, Formik } from 'formik';

const modalRoot = document.querySelector('#modal-root');

export const ModalEditGood = ({ onClose, onSubmit, good }) => {
  const [description, setDescription] = useState(good.description);

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
    id: good._id,
    title: good.title,
    text: good.text,
    description: description,
    photoURL: good.photoURL,
    price: good.price,
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalWindow>
        <ButtonClose type="button" onClick={onClose}>
          <CloseSvg />
        </ButtonClose>
        <AdminPageWrapper>
          <Formik
            // validationSchema={schema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <AdminPageForm>
                <AdminPageInput type="text" name="title" />
                <ErrorMessage name="title" />

                <AdminPageInput type="text" name="text" />
                <ErrorMessage name="text" />

                <AdminPageTextArea
                  as="textarea"
                  type="text"
                  name="description"
                  value={description}
                  onChange={e => {
                    setDescription(e.target.value);
                    setFieldValue('description', e.target.value);
                  }}
                />
                <ErrorMessage name="description" />

                <AdminPageInput type="number" name="price" />
                <ErrorMessage name="price" />

                <AdminPageBtn type="submit">Edit</AdminPageBtn>
              </AdminPageForm>
            )}
          </Formik>
        </AdminPageWrapper>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};

import { Formik, ErrorMessage } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { addGoods } from 'redux/goods/operations';
import {
  AdminPageSection,
  AdminPageContainer,
  AdminPageWrapper,
  AdminPageForm,
  AdminPageInput,
  AdminPageBtn,
  AdminPageTextArea,
  AdminPageList,
} from './AdminPage.styled';
import { AdminGoodItem } from 'components/AdminGoodItem';
import { useGoods } from 'hooks';
import { ImageUpload } from 'components/ImageUpload';

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2)
    .max(30, 'must be less than 30 characters')
    .required(),
  text: yup.string().min(5, 'must be at least 5 characters').required(),
  photoURL: yup.string().required(),
  price: yup.number().required(),
});

export const AdminPage = () => {
  const dispatch = useDispatch();
  const { goods } = useGoods();
  const [description, setDescription] = useState('');
  const goodsReverse = [...goods].reverse();

  const initialValues = {
    title: '',
    text: '',
    description: '',
    photoURL: '',
    price: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addGoods(values));
    setDescription('');
    resetForm();
  };

  return (
    <AdminPageSection>
      <AdminPageContainer>
        <AdminPageWrapper>
          <Formik
            validationSchema={schema}
            initialValues={initialValues}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue }) => (
              <AdminPageForm>
                <ImageUpload setFieldValue={setFieldValue} />

                <AdminPageInput
                  type="text"
                  name="title"
                  placeholder="Enter Titile"
                />
                <ErrorMessage name="title" />

                <AdminPageInput
                  type="text"
                  name="text"
                  placeholder="Enter Text"
                />
                <ErrorMessage name="text" />

                <AdminPageTextArea
                  as="textarea"
                  value={description}
                  type="text"
                  name="description"
                  placeholder="Enter description"
                  onChange={e => {
                    setFieldValue('description', e.target.value);
                    setDescription(e.target.value);
                  }}
                />
                <ErrorMessage name="description" />

                <AdminPageInput
                  type="number"
                  name="price"
                  placeholder="Enter Price"
                />
                <ErrorMessage name="price" />

                <AdminPageBtn type="submit">Submit</AdminPageBtn>
              </AdminPageForm>
            )}
          </Formik>
          <AdminPageList>
            {goodsReverse.map(good => (
              <AdminGoodItem good={good} key={good._id} />
            ))}
          </AdminPageList>
        </AdminPageWrapper>
      </AdminPageContainer>
    </AdminPageSection>
  );
};

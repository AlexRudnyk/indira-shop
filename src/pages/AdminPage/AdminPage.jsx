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
import { useTranslation } from 'react-i18next';
import i18n from 'i18n';

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2)
    .max(30, i18n.t('Less_30'))
    .required(i18n.t('Title_required')),
  text: yup
    .string()
    .min(5, i18n.t('Atleast_5'))
    .required(i18n.t('Text_required')),
  photoURL: yup.string().required(i18n.t('Photo_required')),
  price: yup.number().required(i18n.t('Price_required')),
});

export const AdminPage = () => {
  const dispatch = useDispatch();
  const { goods } = useGoods();
  const [description, setDescription] = useState('');
  const goodsReverse = [...goods].reverse();
  const { t } = useTranslation();

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
    <AdminPageSection $length={goodsReverse.length}>
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
                  placeholder={t('Enter_Titile')}
                />
                <ErrorMessage name="title" />

                <AdminPageInput
                  type="text"
                  name="text"
                  placeholder={t('Enter_Text')}
                />
                <ErrorMessage name="text" />

                <AdminPageTextArea
                  as="textarea"
                  value={description}
                  type="text"
                  name="description"
                  placeholder={t('Enter_description')}
                  onChange={e => {
                    setFieldValue('description', e.target.value);
                    setDescription(e.target.value);
                  }}
                />
                <ErrorMessage name="description" />

                <AdminPageInput
                  type="number"
                  name="price"
                  placeholder={t('Enter_Price')}
                />
                <ErrorMessage name="price" />

                <AdminPageBtn type="submit">{t('Submit')}</AdminPageBtn>
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

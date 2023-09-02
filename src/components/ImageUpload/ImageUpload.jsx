import { useState } from 'react';
import Success from 'images/success-check.png';
import {
  UploadLabel,
  UploadText,
  PreviewWrapper,
  PreviewImg,
  PreviewImgSuccess,
  PreviewBtn,
  PreviewImgWrapper,
} from './ImageUpload.styled';
import { useTranslation } from 'react-i18next';

export const ImageUpload = ({ setFieldValue }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isUploaded, setIsUploaded] = useState(false);
  const { t } = useTranslation();

  const uploadImage = async () => {
    const data = new FormData();
    data.append('file', image);
    data.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    data.append('cloud_name', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
    data.append('folder', 'Cloudinary-React');

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: data,
        }
      );
      const res = await response.json();
      setFieldValue('photoURL', res.url);
      setIsUploaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreview(reader.result);
    };
  };

  const handleResetClick = () => {
    setPreview(null);
    setImage(null);
    setIsUploaded(false);
  };

  return (
    <div>
      <div>
        <header>
          <input
            hidden
            id="hidden-input"
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
          {!preview && (
            <UploadLabel htmlFor="hidden-input">
              <UploadText>{t('Upload_file')}</UploadText>
            </UploadLabel>
          )}
          {preview && (
            <PreviewWrapper>
              <PreviewImgWrapper>
                <PreviewImg src={preview} alt="preview" />
                <PreviewImgSuccess
                  src={Success}
                  alt="Success"
                  $isUploaded={isUploaded}
                />
              </PreviewImgWrapper>
              <div>
                <PreviewBtn
                  type="button"
                  onClick={uploadImage}
                  disabled={isUploaded}
                >
                  {t('Upload')}
                </PreviewBtn>
                <PreviewBtn type="button" onClick={handleResetClick}>
                  {t('Reset')}
                </PreviewBtn>
              </div>
            </PreviewWrapper>
          )}
        </header>
      </div>
    </div>
  );
};

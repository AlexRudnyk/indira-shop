import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSelect } from './LangSwitcher.styled';

export const LangSwitcher = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('');

  const handleLanguageToggle = () => {
    const newLanguage = language === 'en' ? 'uk' : 'en';
    setLanguage(newLanguage);
    // document.location.reload();
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const current = localStorage.getItem('i18nextLng');
    if (current) {
      i18n.changeLanguage(current);
      return setLanguage(current);
    }
    setLanguage('uk');
  }, [i18n, language]);

  return (
    <>
      <LanguageSelect onChange={handleLanguageToggle}>
        <option value={language}>UA</option>
        <option value={language}>EN</option>
      </LanguageSelect>
    </>
  );
};

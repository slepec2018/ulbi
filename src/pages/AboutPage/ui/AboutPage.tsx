import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <div className='about-page'>
      <h1>{t('О сайте')}</h1>
    </div>
  );
};

export default AboutPage;
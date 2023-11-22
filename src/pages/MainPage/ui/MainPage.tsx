import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (val: string) => { 
    setValue(val);
  }

  return (
    <div className='main-page'>
      <h1>{t('Главная страница')}</h1>
      <Input
        value={value}
        onChange={onChange}
        placeholder={'Введите что-нибудь'}
      />
    </div>
  );
};

export default MainPage;
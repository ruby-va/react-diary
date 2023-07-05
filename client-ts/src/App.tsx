import MyInput from '@/components/ui/my-input';
import { ChangeEvent, useState } from 'react';
import { MoodTypes } from '@/types';
import Header from '@/layout/header/Header.tsx';
import MoodSelect from '@/components/ui/mood-select';

interface SelectOption {
  label: string;
  value: MoodTypes;
}

function App() {
  const [name, setName] = useState('');
  const [select, setSelect] = useState({ value: 'cry', label: 'Плачет' });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e);
    setSelect(e);
  };

  return (
    <>
      <MyInput
        isLabelShown={true}
        border={true}
        labelText="Введите ваше имя"
        wrapperClassName="wrapperClass"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      {/*<Header />*/}
      <MoodSelect onChange={handleChange} value={select} />
    </>
  );
}

export default App;

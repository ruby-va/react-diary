import MyInput from '@/components/ui/my-input';
import { ChangeEvent, useState } from 'react';
import MoodSelect from '@/components/ui/mood-select';

function App() {
  const [name, setName] = useState<string>('');

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
      <MoodSelect />
    </>
  );
}

export default App;

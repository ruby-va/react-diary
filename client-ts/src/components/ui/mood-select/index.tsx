import Select, { GroupBase, Props, StylesConfig } from 'react-select';

import MoodIcon from '@/components/ui/mood-icon';
import { MoodTypes } from '@/types';
import styles from './styles.module.scss';

type SelectOption = {
  value: MoodTypes;
  text: string;
};

function MoodSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>) {
  const options: SelectOption[] = [
    {
      value: 'cry',
      text: 'Плачет',
    },
    {
      value: 'pensive',
      text: 'Задумчивый',
    },
    {
      value: 'happy',
      text: 'Счастливый',
    },
    {
      value: 'calm',
      text: 'Спокойный',
    },
  ];

  const { ...otherDefaultProps } = props;

  const myCustomStyles: StylesConfig<Option, IsMulti, Group> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'white',
      width: '100px',
      height: '60px',
      borderRadius: '12px',
    }),
    option: (styles) => {
      return {
        ...styles,
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        cursor: 'pointer',
      };
    },
  };

  // return <Select {...props} theme={(theme) => ({ ...theme, borderRadius: 0 })} />;

  return (
    <Select
      styles={myCustomStyles}
      {...otherDefaultProps}
      formatOptionLabel={(e) => {
        {
          console.log(e);
        }
        return <div></div>;
      }}
      // options={options} Error types
      placeholder={<MoodIcon size={24} emotion="default" />}
    ></Select>
  );
}

export default MoodSelect;

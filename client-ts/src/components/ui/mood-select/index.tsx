import Select, { GroupBase, Props, StylesConfig, SingleValue } from 'react-select';

import MoodIcon from '@/components/ui/mood-icon';
import { MoodTypes } from '@/types';
import styles from './styles.module.scss';

interface SelectOption {
  readonly label: string;
  readonly value: MoodTypes;
}

function Index<
  Option extends SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({ ...otherDefaultProps }: Props<Option, IsMulti, Group>) {
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

  return (
    <Select
      formatOptionLabel={(e) => {
        return (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <MoodIcon title={e.label} emotion={e.value} size={24} />
          </div>
        );
      }}
      placeholder={<MoodIcon size={24} emotion="default" />}
      styles={myCustomStyles}
      {...otherDefaultProps}
    ></Select>
  );
}

export default Index;

import Select, { GroupBase, Props, StylesConfig } from 'react-select';

import MoodIcon from '@/components/ui/mood-icon';
import { MoodOption, MoodTypes } from '@/types';

interface SelectOption {
  readonly label: string;
  readonly value: MoodTypes;
}

interface SelectProps {
  readonly showAll?: boolean;
}

function Index<
  Option extends SelectOption,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  showAll = false,
  ...otherDefaultProps
}: Props<Option, IsMulti, Group> & SelectProps) {
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
      placeholder={<MoodIcon size={24} emotion="all" />}
      styles={myCustomStyles}
      {...otherDefaultProps}
    ></Select>
  );
}

export default Index;

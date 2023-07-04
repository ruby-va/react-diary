// import Select, { GroupBase, Props, StylesConfig } from 'react-select';
//
// import MoodIcon from '@/components/ui/mood-icon';
// import { MoodTypes } from '@/types';
// import styles from './styles.module.scss';
//
// type SelectOption = {
//   value: MoodTypes;
//   text: string;
// };
//
// function MoodSelect<
//   Option,
//   IsMulti extends boolean = false,
//   Group extends GroupBase<Option> = GroupBase<Option>,
// >(props: Props<Option, IsMulti, Group>) {
//   const options: SelectOption[] = [
//     {
//       value: 'cry',
//       text: 'Плачет',
//     },
//     {
//       value: 'pensive',
//       text: 'Задумчивый',
//     },
//     {
//       value: 'happy',
//       text: 'Счастливый',
//     },
//     {
//       value: 'calm',
//       text: 'Спокойный',
//     },
//   ];
//
//   const { formatOptionLabel, ...otherDefaultProps } = props;
//
//   const myCustomStyles: StylesConfig = {
//     control: (styles) => ({
//       ...styles,
//       backgroundColor: 'white',
//       width: '100px',
//       height: '60px',
//       borderRadius: '12px',
//     }),
//     option: (styles) => {
//       return {
//         ...styles,
//         height: '40px',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'left',
//         cursor: 'pointer',
//       };
//     },
//   };
//
//   // return <Select {...props} theme={(theme) => ({ ...theme, borderRadius: 0 })} />;
//
//   return (
//     <Select
//       styles={myCustomStyles}
//       formatOptionLabel={(e: SelectOption) => (
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <MoodIcon title={e.text} emotion={e.value} size={24} />
//         </div>
//       )}
//       options={options}
//       placeholder={<MoodIcon size={24} emotion="default" />}
//       {...otherDefaultProps}
//     ></Select>
//   );
// }
//
// export default MoodSelect;

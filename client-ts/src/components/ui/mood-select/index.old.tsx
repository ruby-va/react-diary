// import Select, { GroupBase, Props, StylesConfig } from 'react-select';
//
// import MoodIcon from '@/components/ui/mood-icon';
// import { MoodTypes } from '@/types';
// import styles from './styles.module.scss';
//
// interface SelectOption {
//   label: string;
//   value: MoodTypes;
// }
//
// const options: SelectOption[] = [
//   {
//     value: 'cry',
//     label: 'Плачет',
//   },
//   {
//     value: 'pensive',
//     label: 'Задумчивый',
//   },
//   {
//     value: 'happy',
//     label: 'Счастливый',
//   },
//   {
//     value: 'calm',
//     label: 'Спокойный',
//   },
// ];
//
// function MoodSelect<
//   Option,
//   IsMulti extends boolean = false,
//   Group extends GroupBase<Option> = GroupBase<Option>,
// >(props: Props<Option, IsMulti, Group>) {
//   const { ...otherDefaultProps } = props;
//
//   const myCustomStyles: StylesConfig<Option, IsMulti, Group> = {
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
//       formatOptionLabel={(e) => {
//         return (
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <MoodIcon title={e.label} emotion={e.value} size={24} />
//           </div>
//         );
//       }}
//       options={options}
//       placeholder={<MoodIcon size={24} emotion="default" />}
//       styles={myCustomStyles}
//       {...otherDefaultProps}
//     ></Select>
//   );
// }
//
// export default MoodSelect;

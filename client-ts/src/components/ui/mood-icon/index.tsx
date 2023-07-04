import pensiveIcon from '@/assets/images/emotions/pensive.png';
import calmIcon from '@/assets/images/emotions/calm.png';
import happyIcon from '@/assets/images/emotions/happy.png';
import cryIcon from '@/assets/images/emotions/cry.png';
import placeholderIcon from '@/assets/images/emotions/smile-mouth-open.png';

import { FC } from 'react';
import styles from './styles.module.scss';
import { IMoodIcon } from '@/types';

const MoodIcon: FC<IMoodIcon> = (props) => {
  const { emotion = 'default', size, ...otherDefaultProps } = props;

  const iconsMap = {
    calm: calmIcon,
    happy: happyIcon,
    pensive: pensiveIcon,
    cry: cryIcon,
    default: placeholderIcon,
  };

  return (
    <img
      {...otherDefaultProps}
      className={styles.icon}
      width={size}
      height={size}
      src={iconsMap[emotion]}
      alt=""
    />
  );
};
export default MoodIcon;

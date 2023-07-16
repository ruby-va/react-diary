import pensiveIcon from '@/assets/images/emotions/pensive.png';
import calmIcon from '@/assets/images/emotions/calm.png';
import happyIcon from '@/assets/images/emotions/happy.png';
import cryIcon from '@/assets/images/emotions/cry.png';
import placeholderIcon from '@/assets/images/emotions/smile-mouth-open.png';

import styles from './styles.module.scss';
import { IMoodIcon } from '@/types';

const MoodIcon = ({ emotion = 'all', size, ...otherDefaultProps }: IMoodIcon) => {
  const iconsMap = {
    calm: calmIcon,
    happy: happyIcon,
    pensive: pensiveIcon,
    cry: cryIcon,
    all: placeholderIcon,
  };

  return (
    <>
      {emotion === 'all' ? (
        'Все'
      ) : (
        <img
          {...otherDefaultProps}
          className={styles.icon}
          width={size}
          height={size}
          src={iconsMap[emotion]}
          alt=""
        />
      )}
    </>
  );
};
export default MoodIcon;

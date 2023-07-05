import styles from './styles.module.scss';
import { ReactNode } from 'react';
import { ButtonProps } from '@/types';

type ColorTypes = 'green' | 'orange';

interface Props extends ButtonProps {
  colorType?: ColorTypes;
  children?: ReactNode;
}

const MyButton = (props: Props) => {
  const { colorType = 'green', children, className, ...otherDefaultProps } = props;
  const btnStyles = {
    green: {
      background: '#61b15a',
      color: '#fff',
    },
    orange: {
      background: '#FFCE89',
      color: '#000',
    },
  };

  return (
    <button
      {...otherDefaultProps}
      className={`${styles.btn} ${className}`}
      style={{
        backgroundColor: btnStyles[colorType].background,
        color: btnStyles[colorType].color,
      }}
    >
      {children}
    </button>
  );
};
export default MyButton;

import styles from './styles.module.scss';
import { ReactNode } from 'react';
import { ButtonProps } from '@/types';
import cl from 'classnames';

type ColorTypes = 'green' | 'orange';

interface Props extends ButtonProps {
  colorType?: ColorTypes;
  children?: ReactNode;
}

const Index = ({
  colorType = 'green',
  children,
  className,
  ...otherDefaultProps
}: Props) => {
  const colorVariants = {
    green: 'btn-green',
    orange: 'btn-orange',
  };

  const btnColor = colorVariants[colorType];

  const classes = cl(styles[btnColor], className, {
    [styles.btn]: true,
  });

  console.log(classes);

  return (
    <button {...otherDefaultProps} className={`${classes} ${className}`}>
      {children}
    </button>
  );
};
export default Index;

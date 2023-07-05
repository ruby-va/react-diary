import { ChangeEvent, FC } from 'react';
import styles from './style.module.scss';
import { InputProps } from '@/types';
import MyLabel from '@/components/ui/my-label';

interface Props extends InputProps {
  isLabelShown?: boolean;
  border?: boolean;
  labelText: string;
  wrapperClassName?: string;
}

const Index: FC<Props> = (props) => {
  const {
    isLabelShown = false,
    wrapperClassName,
    id,
    border = true,
    labelText,
    ...otherDefaultProps
  } = props;

  return (
    <div className={`${styles.inputWrapper} ${wrapperClassName}`}>
      {labelText && <MyLabel isHidden={false} htmlFor={id} />}
      <input
        {...otherDefaultProps}
        style={border ? { border: '1px solid black' } : undefined}
        className={styles.input}
        id={id}
      />
    </div>
  );
};

export default Index;

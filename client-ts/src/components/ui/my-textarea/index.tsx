import styles from './styles.module.scss';
import MyLabel from '@/components/ui/my-label';
import { TextAreaProps } from '@/types';

interface Props extends TextAreaProps {
  wrapperClassName?: string;
  border?: boolean;
  isLabelShown?: boolean;
  labelText?: string;
}

const Index = ({
  labelText,
  isLabelShown = false,
  className,
  wrapperClassName,
  border = false,
  id,
  ...otherDefaultProps
}: Props) => {
  return (
    <div className={`${styles.inputWrapper} ${wrapperClassName}`}>
      {labelText && <MyLabel isHidden={false} htmlFor={id} />}
      <textarea
        {...otherDefaultProps}
        style={border ? { border: '1px solid black' } : undefined}
        id={id}
        className={`${styles.textarea} ${className}`}
      ></textarea>
    </div>
  );
};
export default Index;

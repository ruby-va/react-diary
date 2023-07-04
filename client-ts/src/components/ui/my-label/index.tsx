import { FC } from 'react';
import { LabelProps } from '@/types';

interface Props extends LabelProps {
  isHidden: boolean;
  htmlFor: string | undefined;
}

const Index: FC<Props> = (props) => {
  const { htmlFor, isHidden, children, className, ...otherDefaultProps } = props;

  return (
    <label
      {...otherDefaultProps}
      htmlFor={htmlFor}
      className={isHidden ? 'sr-only' : undefined}
    >
      {children}
    </label>
  );
};

export default Index;

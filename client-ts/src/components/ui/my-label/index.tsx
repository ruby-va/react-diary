import { LabelProps } from '@/types';

interface Props extends LabelProps {
  isHidden: boolean;
  htmlFor: string | undefined;
}

const Index = ({
  htmlFor,
  isHidden,
  children,
  className,
  ...otherDefaultProps
}: Props) => {
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

import {FC, ReactNode,} from "react";

type Props = {
    title: string;
    children?: ReactNode
};

const index: FC<Props> = ({title, children}) => {
    return <button>{children}</button>;
};
export default index;

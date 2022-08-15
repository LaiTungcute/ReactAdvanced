import { FC } from "react";

interface HeaderPropTypes {
    children: any;
}

const Header : FC<HeaderPropTypes> = ({children}) => {
    return (
        <div className="">{children}</div>
    )
}

export default Header;
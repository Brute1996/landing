import { Link } from "react-router-dom";
import { LogoStyle } from "./Logo.styled";

const Logo = ({halndleMenuClose}) => {
    return (
        <LogoStyle onClick={halndleMenuClose} className="animate__animated animate__fadeInDown animate__slow">
            <Link className="logo" aria-label="logo and link to homepage" to='/'>Landing</Link>
       </LogoStyle> 
    )
};

export default Logo;
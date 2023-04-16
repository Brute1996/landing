import { Link, NavLink } from "react-router-dom";
import { HeaderStyle, NavMenuStyle } from "./Header.styled";
import BuyButton from "../BuyButton/BuyButton";

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <NavMenuStyle>
                        <Link className="logo"  aria-label="logo and link to homepage" to='/'>Landing</Link>
                    <ul className="nav-list">
                        <li className="nav-list-item"><NavLink to='/clothes'>Clothes</NavLink></li>
                        <li className="nav-list-item"><NavLink to='/sneakers'>Sneakers</NavLink></li>
                        <li className="nav-list-item"><NavLink to='/bags'>Bags</NavLink></li>
                        <li className="nav-list-item"><NavLink to='/accessorize'>Accessorize</NavLink></li>
                    </ul>
                </NavMenuStyle>
                <BuyButton/>
            </HeaderStyle>
        </>
    )
};

export default Header;
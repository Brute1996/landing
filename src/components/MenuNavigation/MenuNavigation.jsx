import { NavLink } from "react-router-dom";
import { MenuNavigationStyle, NavigationListStyle } from "./MenuNavigation.styled";

const MenuNavigation = ({isMenuOpen, halndleMenuClose}) => {
    return (
        <MenuNavigationStyle
            className={isMenuOpen ? "menu-active" : null
            }>
            <NavigationListStyle className="animate__animated animate__fadeInDown animate__slow" >
                <li className="nav-list-item"><NavLink
                 onClick={halndleMenuClose}
                 to='/clothes'>Clothes</NavLink></li>
                <li className="nav-list-item"><NavLink
                 onClick={halndleMenuClose}
                 to='/sneakers'>Sneakers</NavLink></li>
                <li className="nav-list-item"><NavLink
                 onClick={halndleMenuClose}
                 to='/bags'>Bags</NavLink></li>
                <li className="nav-list-item"><NavLink
                 onClick={halndleMenuClose}
                 to='/accessorize'>Accessorize</NavLink></li>
            </NavigationListStyle>
        </MenuNavigationStyle>
    )
};

export default MenuNavigation;
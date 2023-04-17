import Logo from "../Logo/Logo";
import BuyButton from "../BuyButton/BuyButton";
import MenuNavigation from "../MenuNavigation/MenuNavigation";
import { StaticMenuBarStle } from "./StaticMenuBar.styled";

const StaticMenuBar = () => {
    return (
        <StaticMenuBarStle>
            <Logo />
            <MenuNavigation/>
            <BuyButton />
        </StaticMenuBarStle>
    )
};

export default StaticMenuBar;
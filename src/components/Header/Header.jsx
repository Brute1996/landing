import { HeaderStyle } from "./Header.styled";
import MobMenuBar from "../MobMenuBar/MobMenuBar";
import StaticMenuBar from "../StaticMenuBar/StaticMenuBar";

const Header = () => {
    return (
        <>
            <HeaderStyle>
                <MobMenuBar />
                <StaticMenuBar />
            </HeaderStyle>
        </>
    )
};

export default Header;
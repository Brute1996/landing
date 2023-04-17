import Logo from "../Logo/Logo"
import { FiMenu } from 'react-icons/fi'
import {RxCross1} from 'react-icons/rx'
import { MobMenuBarStyle, MobMenuBarWrapper } from "./MobMenuBar.styled";
import MenuNavigation from "../MenuNavigation/MenuNavigation";
import { useState } from "react";
import BuyButton from "../BuyButton/BuyButton";

const body = document.body
    
const MobMenuBar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const halndleMenuToggle = () => setIsMenuOpen(!isMenuOpen)
    const halndleMenuClose = () => setIsMenuOpen(false)

    if (isMenuOpen) {
        body.style.overflow = 'hidden'
    } else {
        body.style.overflow = 'auto'
    }

    return (
        <>
            <MobMenuBarWrapper>
                <MenuNavigation halndleMenuClose={halndleMenuClose} isMenuOpen={isMenuOpen} />
                <MobMenuBarStyle>
                    <Logo halndleMenuClose={halndleMenuClose} />
                    <BuyButton />
                    <button
                        type="button"
                        className="burger-menu"
                        onClick={halndleMenuToggle}
                    >{isMenuOpen ?  <RxCross1/> : <FiMenu />}</button>
                </MobMenuBarStyle>
            </MobMenuBarWrapper>
            <div className="menu-mob-bar-copy"
                style={{ height: '80px', width: '100%', visibility: 'hidden' }}></div>
        </>)
};

export default MobMenuBar;
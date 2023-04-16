import { AppAvalible } from "../AppAvaliable/AppAvaliable";
import TextImageMask from "../TextImageMask/TextImageMask";
import { HeroSectionStyle, HeroSectionText } from "./HeroSection.styled";

const HeroSection = () => {
    return (
        <HeroSectionStyle>
            <div className="hero-left-side">
                <AppAvalible />
                <HeroSectionText className="hero-text">Choose your winter <span className="look-word">look<span className="look-word-star">*</span></span> apparel</HeroSectionText>
            </div>
            <TextImageMask />
        </HeroSectionStyle>
    )
};

export default HeroSection;
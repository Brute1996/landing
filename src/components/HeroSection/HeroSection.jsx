import { AppAvalible } from "../AppAvaliable/AppAvaliable";
import BackgroundBlueLine from "../BackgroundBlueLine/BackgroundBlueLine";
import TextImageMask from "../TextImageMask/TextImageMask";
import { HeroSectionStyle, HeroSectionText } from "./HeroSection.styled";

const HeroSection = () => {
    return (
        <HeroSectionStyle>
            <BackgroundBlueLine/>
            <div className="hero-left-side">
                <AppAvalible />
                <HeroSectionText className="hero-text animate__animated animate__fadeInLeft animate__slow">Choose your winter <span className="look-word">look<span className="look-word-star">*</span></span> apparel</HeroSectionText>
            </div>
            <TextImageMask />
            
        </HeroSectionStyle>
    )
};

export default HeroSection;
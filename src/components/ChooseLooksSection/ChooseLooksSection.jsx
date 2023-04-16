import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "../Slider/Slider";
import { ChooseLooksSliderStyle } from "./ChooseLooksSectoion.styled";

const ChooseLooksSection = () => {
    return (
        <ChooseLooksSliderStyle>
            <SectionTitle>Choose looks</SectionTitle>
            <Slider/>
        </ChooseLooksSliderStyle>
    )
};

export default ChooseLooksSection;
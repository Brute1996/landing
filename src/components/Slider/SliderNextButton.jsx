import { useSwiper } from "swiper/react";
import { ReactComponent as Arrow } from "../../images/icons/arrow.svg"
import { SliderButton } from "./SliderButton.styled";

export default function SliderNextButton() {
  const swiper = useSwiper();

  return (
    <SliderButton className="slider-btn next" onClick={() => swiper.slideNext()}><Arrow/></SliderButton>
  );
}
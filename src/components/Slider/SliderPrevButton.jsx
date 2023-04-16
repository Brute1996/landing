import { useSwiper } from "swiper/react";
import { ReactComponent as Arrow } from "../../images/icons/arrow.svg"
import { SliderButton } from "./SliderButton.styled";

export default function SliderPrevButton() {
  const swiper = useSwiper();

  return (
    <SliderButton className="slider-btn prev" onClick={() => swiper.slidePrev()}>
      <Arrow style={{transform: 'rotate(180deg)'}} />
    </SliderButton>
  );
}
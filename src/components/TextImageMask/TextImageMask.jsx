import { TextImageMaskStyle } from "./TextImageMask.styled";
import ImageMaskBackground from "../../images/img/create-text-img.jpg"
import ImageMask from "./imageMask";

const TextImageMask = () => {

    return (
        <TextImageMaskStyle className="animate__animated animate__fadeInRight animate__slower animate__delay-3s">
            <ImageMask img={ImageMaskBackground}/>
        </TextImageMaskStyle>
    )
};

export default TextImageMask;
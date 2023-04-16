import { TextImageMaskStyle } from "./TextImageMask.styled";
import ImageMaskBackground from "../../images/img/create-text-img.jpg"
import ImageMask from "./imageMask";

const TextImageMask = () => {

    return (
        <TextImageMaskStyle>
            <ImageMask test={ImageMaskBackground}/>
        </TextImageMaskStyle>
    )
};

export default TextImageMask;
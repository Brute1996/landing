import ImageMaskBackground from "../../images/img/create-text-img.jpg"
import ImageMaskSvg from "./imageMaskSvg";

const TextImageMask = ({imageUrl}) => {

    return (
        <ImageMaskSvg img={imageUrl ? imageUrl : ImageMaskBackground} />
    )
};

export default TextImageMask;
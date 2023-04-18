import { useEffect, useState } from "react";
import { AppAvalible } from "../AppAvaliable/AppAvaliable";
import BackgroundBlueLine from "../BackgroundBlueLine/BackgroundBlueLine";
import TextImageMask from "../TextImageMask/TextImageMask";
import { HeroSectionStyle, HeroSectionText } from "./HeroSection.styled";

const HeroSection = () => {
    const [image, setImage] = useState();
    const [imageUrl, setImageUrl] = useState();
    

    useEffect(() => {
        const fileReader = new FileReader();
        
        if (!image) {
            return
        }

        fileReader.readAsDataURL(image)

        fileReader.onloadend = () => {
            setImageUrl(fileReader.result)
        }

        
        
        // console.log(fileReader);
        
    },[image])

    const handleImageSelect = (e) => {
        const file = e.target.files[0]

        if(!file) return
        
        switch (file.type) {
            case "image/jpeg":
                setImage(file)
                break;
            case "image/png":
                setImage(file)
                break;
            default:
                return
        }
    };

    return (
        <HeroSectionStyle>
            <BackgroundBlueLine />
            <div className="hero-left-side">
                <AppAvalible />
                <HeroSectionText
                    className="hero-text animate__animated animate__fadeInLeft animate__slow">Choose your winter
                    <span className="look-word" title="Click to load your image">
                        <label>look<span className="look-word-star">*</span>
                            <input onChange={handleImageSelect} type="file" style={{ visibility: "hidden", width: "0", height: "0" }} />
                        </label>
                    </span> apparel </HeroSectionText>
            </div>

            <TextImageMask imageUrl={imageUrl} />
            
        </HeroSectionStyle>
    )
};

export default HeroSection;
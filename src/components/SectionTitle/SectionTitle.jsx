import { SectionTitleStyle } from "./SectionTitle.styled";

const SectionTitle = ({children}) => {
    return (
        <SectionTitleStyle data-aos="fade-down">{children}</SectionTitleStyle>
    )
};

export default SectionTitle;
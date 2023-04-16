import { SectionTitleStyle } from "./SectionTitle.styled";

const SectionTitle = ({children}) => {
    return (
        <SectionTitleStyle>{children}</SectionTitleStyle>
    )
};

export default SectionTitle;
import { Link } from "react-router-dom";
import { NotAvaliavlePageStyle } from "./styles/NotAvaliavlePage.styled";

const NotAvaliavlePage = () => {
    return (
        <NotAvaliavlePageStyle>
            <h2>The page is not available.</h2>
            <p>We are still working on developing this page.</p>
            <Link to='/'><div className="home-btn">Ok</div></Link>
        </NotAvaliavlePageStyle>
    )
};

export default NotAvaliavlePage;
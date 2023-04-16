import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Container from "../utils/Container/Container";

const MainLayout = () => {
    return (
        <>
            <Container>
                <Header />
                <main>
                    <Outlet />
                </main>
            </Container>
        </>
    )
};

export default MainLayout;
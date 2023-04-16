import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import { Clothes, Sneakers, Bags, Accessorize, Home } from "../pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/sneakers" element={<Sneakers />} />
          <Route path="/bags" element={<Bags />} />
          <Route path="/accessorize" element={<Accessorize />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

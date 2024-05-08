import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Navbar/Layouts/Layout";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/products/:prodId" element={<ItemDetailContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

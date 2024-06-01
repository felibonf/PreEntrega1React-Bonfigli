import { Home } from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Navbar/Layouts/Layout";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/products/:prodId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;

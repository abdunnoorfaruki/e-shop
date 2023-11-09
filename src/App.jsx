import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/home"));
const Shop = lazy(() => import("./pages/shop"));
const Cart = lazy(() => import("./pages/cart"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;

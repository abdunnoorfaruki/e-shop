import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/home"));
const Shop = lazy(() => import("./pages/shop"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;

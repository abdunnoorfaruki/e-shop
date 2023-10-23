import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
const Home = lazy(() => import("./pages/home"));
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;

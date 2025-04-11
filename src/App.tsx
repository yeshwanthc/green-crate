import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { Cart } from "./components/cart/Cart";
import Header from "./components/layout/Header";
import ScrollToTop from "./components/layout/ScrollToTop";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <div className="min-h-screen bg-[#fefbf4]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

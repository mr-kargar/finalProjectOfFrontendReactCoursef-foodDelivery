import "./App.scss";
import LoginPage from "./screens/LoginPage";
import StartPage from "./screens/StartPage";
import HomePage from "./screens/HomePage";
import MyProfilePage from "./screens/MyProfilePage";
import HistoryPage from "./screens/HistoryPage";
import OrdersPage from "./screens/OrdersPage";
import OfferAndPromoPage from "./screens/OfferAndPromoPage";
import SearchPage from "./screens/SearchPage";
import FoodDetailsPage from "./screens/FoodDetailsPage";
import CheckoutPage from "./screens/CheckoutPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./screens/CartPage";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/profile" element={<MyProfilePage />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/order" element={<OrdersPage />} />
      <Route path="/offer" element={<OfferAndPromoPage />} />
      <Route path="/search/:name" element={<SearchPage />} />
      <Route path="/foodDetails/:name" element={<FoodDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/cart/payment/:totalSum" element={<CheckoutPage />} />
    </Routes>
    </BrowserRouter>
    
   
   
  );
}

export default App;

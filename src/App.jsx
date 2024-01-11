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
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <MyProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <HistoryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <OrdersPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/offer"
          element={
            <ProtectedRoute>
              <OfferAndPromoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/search/:name"
          element={
            <ProtectedRoute>
              <SearchPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/foodDetails/:name"
          element={
            <ProtectedRoute>
              <FoodDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart/payment/:totalSum"
          element={
            <ProtectedRoute>
              <CheckoutPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

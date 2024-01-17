import React from 'react'
import {Routes, Route , useLocation} from "react-router-dom";
import LoginPage from "../screens/LoginPage";
import StartPage from "../screens/StartPage";
import HomePage from "../screens/HomePage";
import MyProfilePage from "../screens/MyProfilePage";
import HistoryPage from "../screens/HistoryPage";
import OrdersPage from "../screens/OrdersPage";
import OfferAndPromoPage from "../screens/OfferAndPromoPage";
import SearchPage from "../screens/SearchPage";
import FoodDetailsPage from "../screens/FoodDetailsPage";
import CheckoutPage from "../screens/CheckoutPage";
import CartPage from "../screens/CartPage";
import ProtectedRoute from "../utils/ProtectedRoute";

import {AnimatePresence} from 'framer-motion';


function AnimatedRouts() {
    const location = useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
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
      path="/cart/payment/:id"
      element={
        <ProtectedRoute>
          <CheckoutPage />
        </ProtectedRoute>
      }
    />
    <Route path="*" element={<LoginPage />} />
  </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRouts
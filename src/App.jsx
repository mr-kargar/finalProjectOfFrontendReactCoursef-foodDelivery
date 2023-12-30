import "./App.scss";
import LoginPage from "./screens/LoginPage";
import StartPage from "./screens/StartPage";
import HomePage from "./screens/HomePage";
import MyProfilePage from "./screens/MyProfilePage";
import HistoryPage from "./screens/HistoryPage";
import OrdersPage from "./screens/OrdersPage";
import OfferAndPromoPage from "./screens/OfferAndPromoPage";
import SearchPage from "./screens/SearchPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


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
    </Routes>
    </BrowserRouter>
    
   
   
  );
}

export default App;

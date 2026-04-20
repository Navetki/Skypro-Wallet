import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import MainPage from "../../pages/MainPage/MainPage";

export const AppRoutes = ({ user, setUser, logout }) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage user={user} logout={logout} />} />

      <Route path="/login" element={<LoginPage setUser={setUser} />} />

      <Route path="/register" element={<RegisterPage setUser={setUser} />} />
    </Routes>
  );
};

export default AppRoutes;

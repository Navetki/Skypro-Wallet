import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  const navigate = useNavigate(); // 3. Инициализируй хук навигации

  // 4. Следим за пользователем: если user стал null — гоним на логин
  useEffect(() => {
    // Получаем текущий путь в браузере
    const currentPath = window.location.pathname;

    // Редирект на логин только если юзера нет И мы НЕ на странице регистрации
    if (!user && currentPath !== "/register") {
      navigate("/login");
    }
  }, [user, navigate]);

  const loginUser = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    navigate("/");
  };

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return <AppRoutes user={user} setUser={loginUser} logout={logoutUser} />;
}

export default App;

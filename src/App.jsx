import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import { GlobalStyle } from "./GlobalStyle.styled";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname;

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

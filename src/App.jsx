import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "./components/AppRoutes/AppRoutes";
import { GlobalStyle } from "./GlobalStyle.styled";
import { getTransactions } from "./services/api";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  const fetchTransactions = useCallback(async () => {
    if (!user?.token) {
      setIsLoading(false);
      return;
    }

    try {
      const data = await getTransactions({ token: user.token });
      setTransactions(data.transactions || []);
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error.message);
    } finally {
      setIsLoading(false);
    }
  }, [user?.token]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (!user && currentPath !== "/register") {
      navigate("/login");
    }
  }, [user, navigate]);

  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <GlobalStyle />
      <AppRoutes
        user={user}
        setUser={setUser}
        logout={logoutUser}
        transactions={transactions}
        fetchTransactions={fetchTransactions}
        isLoading={isLoading}
      />
    </>
  );
}

export default App;

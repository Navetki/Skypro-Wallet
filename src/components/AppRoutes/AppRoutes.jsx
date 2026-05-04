import { Routes, Route } from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import RegisterPage from "../../pages/RegisterPage/RegisterPage";
import MainPage from "../../pages/MainPage/MainPage";
import AnalysisPage from "../../pages/AnalysisPage/AnalysisPage";

export const AppRoutes = ({
  user,
  setUser,
  logout,
  transactions,
  fetchTransactions,
  isLoading,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainPage
            user={user}
            logout={logout}
            transactions={transactions}
            fetchTransactions={fetchTransactions}
            isLoading={isLoading}
          />
        }
      />
      <Route path="/login" element={<LoginPage setUser={setUser} />} />
      <Route path="/register" element={<RegisterPage setUser={setUser} />} />
      <Route
        path="/analysis"
        element={
          <AnalysisPage
            transactions={transactions}
            user={user}
            logout={logout}
          />
        }
      />
    </Routes>
  );
};

export default AppRoutes;

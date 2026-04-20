import { useState, useEffect, useCallback } from "react";
import { Container } from "../../App.styled";
import Header from "../../components/Header/Header";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm";
import { getTransactions } from "../../services/api";
import * as S from "./MainPage.styled";

export const MainPage = ({ user, logout }) => {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTransactions = useCallback(async () => {
    if (!user?.token) return;
    try {
      const data = await getTransactions({ token: user.token });

      // ВНИМАНИЕ: API возвращает объект { transactions: [...] }
      // Мы должны положить в стейт именно массив!
      if (data && data.transactions) {
        setTransactions(data.transactions);
      } else if (Array.isArray(data)) {
        setTransactions(data);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, [user?.token]);

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return (
    <S.PageWrapper>
      <Header logout={logout} user={user} />

      <S.FullWidthBackground>
        {/* Container теперь внутри фона, он выровняет таблицу по линии логотипа */}
        <Container>
          <S.MainContent>
            <ExpenseTable
              transactions={transactions}
              isLoading={isLoading}
              token={user?.token}
              refreshData={fetchTransactions}
            />
            <NewExpenseForm
              token={user?.token}
              refreshData={fetchTransactions}
            />
          </S.MainContent>
        </Container>
      </S.FullWidthBackground>
    </S.PageWrapper>
  );
};

export default MainPage;

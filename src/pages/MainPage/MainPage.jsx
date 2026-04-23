import React from "react";
import { Container } from "../../App.styled";
import Header from "../../components/Header/Header";
import ExpenseTable from "../../components/ExpenseTable/ExpenseTable";
import NewExpenseForm from "../../components/NewExpenseForm/NewExpenseForm";
import * as S from "./MainPage.styled";

export const MainPage = ({
  user,
  logout,
  transactions,
  fetchTransactions,
  isLoading,
}) => {
  return (
    <S.PageWrapper>
      <Header logout={logout} user={user} />

      <S.FullWidthBackground>
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

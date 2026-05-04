import React, { useState } from "react";
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
  const [searchQuery, setSearchQuery] = useState("");
  const filteredTransactions = transactions.filter((t) =>
    t.description.toLowerCase().includes(searchQuery.toLowerCase()),
  );
  return (
    <S.PageWrapper>
      <Header logout={logout} user={user} />
      <S.FullWidthBackground>
        <Container>
          <S.MainContent>
            <section>
              <S.TableHeader>
                <S.TableTitle>Таблица расходов</S.TableTitle>
                <S.SearchInput
                  type="text"
                  placeholder="Поиск по описанию..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </S.TableHeader>

              <ExpenseTable
                transactions={filteredTransactions}
                isLoading={isLoading}
                token={user?.token}
                refreshData={fetchTransactions}
              />
            </section>

            <section>
              <NewExpenseForm
                token={user?.token}
                refreshData={fetchTransactions}
              />
            </section>
          </S.MainContent>
        </Container>
      </S.FullWidthBackground>
    </S.PageWrapper>
  );
};

export default MainPage;

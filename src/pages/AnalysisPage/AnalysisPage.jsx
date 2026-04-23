import React, { useMemo } from "react";
import Header from "../../components/Header/Header";
import { Container } from "../../App.styled";
import * as S from "./AnalysisPage.styled";

const AnalysisPage = ({ transactions, user, logout }) => {
  const categoriesSummary = useMemo(() => {
    const summary = {
      food: 0,
      transport: 0,
      housing: 0,
      joy: 0,
      education: 0,
      others: 0,
    };

    transactions.forEach((t) => {
      if (summary[t.category] !== undefined) {
        summary[t.category] += Number(t.sum);
      }
    });

    return summary;
  }, [transactions]);

  const totalAmount = Object.values(categoriesSummary).reduce(
    (acc, curr) => acc + curr,
    0,
  );

  return (
    <S.PageWrapper>
      <Header logout={logout} user={user} />
      <S.FullWidthBackground>
        <Container>
          <S.Title>Анализ расходов</S.Title>
          <S.TotalBlock>
            Общий итог: <span>{totalAmount} ₽</span>
          </S.TotalBlock>

          <S.StatsGrid>
            {Object.entries(categoriesSummary).map(([key, value]) => (
              <S.StatCard key={key}>
                <S.StatName>{key}</S.StatName>
                <S.StatValue>{value} ₽</S.StatValue>
              </S.StatCard>
            ))}
          </S.StatsGrid>
        </Container>
      </S.FullWidthBackground>
    </S.PageWrapper>
  );
};

export default AnalysisPage;

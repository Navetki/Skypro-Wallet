import React, { useMemo } from "react";
import Header from "../../components/Header/Header";
import { Container } from "../../App.styled";
import * as S from "./AnalysisPage.styled";
import Calendar from "../../components/Calendar/Calendar";

const categoryColors = {
  food: "#E1C1FF",
  transport: "#FFB84D",
  housing: "#E2E2E2",
  joy: "#ADBAFF",
  education: "#B5F24D",
  others: "#FFB6C1",
};

const categoryLabels = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жилье",
  joy: "Развлечения",
  education: "Обучение",
  others: "Другое",
};

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
      if (summary[t.category] !== undefined)
        summary[t.category] += Number(t.sum);
    });
    return summary;
  }, [transactions]);

  const totalAmount = useMemo(
    () => Object.values(categoriesSummary).reduce((a, b) => a + b, 0),
    [categoriesSummary],
  );
  const maxValue = useMemo(
    () => Math.max(...Object.values(categoriesSummary), 1),
    [categoriesSummary],
  );

  return (
    <S.PageWrapper>
      <Header logout={logout} user={user} />
      <S.FullWidthBackground>
        <Container>
          <S.Title>Анализ расходов</S.Title>

          <S.AnalysisContent>
            <S.Sidebar>
              <S.Card>
                <S.CardTitle>Период</S.CardTitle>
                <Calendar />
              </S.Card>
            </S.Sidebar>

            <S.MainChartArea>
              <S.Card>
                <S.ChartHeader>
                  <S.TotalSum>{totalAmount.toLocaleString()} ₽</S.TotalSum>
                  <S.TotalLabel>Расходы за выбранный период</S.TotalLabel>
                </S.ChartHeader>

                <S.ChartContainer>
                  {Object.entries(categoriesSummary).map(([key, value]) => (
                    <S.ChartColumn key={key}>
                      <S.BarWrapper>
                        <S.BarValue>{value > 0 ? `${value} ₽` : ""}</S.BarValue>
                        <S.BarFill
                          $height={(value / maxValue) * 100}
                          $color={categoryColors[key]}
                        />
                      </S.BarWrapper>
                      <S.BarLabel>{categoryLabels[key]}</S.BarLabel>
                    </S.ChartColumn>
                  ))}
                </S.ChartContainer>
              </S.Card>
            </S.MainChartArea>
          </S.AnalysisContent>
        </Container>
      </S.FullWidthBackground>
    </S.PageWrapper>
  );
};

export default AnalysisPage;

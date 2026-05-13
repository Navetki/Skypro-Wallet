import React, { useState, useMemo } from "react";
import * as S from "./Calendar.styled";

const Calendar = ({ onRangeChange, transactions }) => {
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
  const [range, setRange] = useState({ start: null, end: null });

  const handleDayClick = (dateStr) => {
    let newRange;
    if (!range.start || (range.start && range.end)) {
      newRange = { start: dateStr, end: null };
    } else {
      newRange =
        dateStr < range.start
          ? { start: dateStr, end: range.start }
          : { ...range, end: dateStr };
    }
    setRange(newRange);
    if (newRange.start && newRange.end) {
      onRangeChange(newRange);
    }
  };

  const renderDays = (count, monthYear, monthNum) => {
    return [...Array(count)].map((_, i) => {
      const day = i + 1;
      const dateStr = `${monthYear}-${String(monthNum).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
      const isStart = dateStr === range.start;
      const isEnd = dateStr === range.end;
      const inRange =
        range.start &&
        range.end &&
        dateStr > range.start &&
        dateStr < range.end;

      return (
        <S.Day
          key={dateStr}
          $selected={isStart || isEnd || inRange}
          $isStart={isStart}
          $isEnd={isEnd}
          onClick={() => handleDayClick(dateStr)}
        >
          {day}
        </S.Day>
      );
    });
  };

  const monthsToRender = useMemo(() => {
    const result = [];
    const now = new Date();
    const currentYear = now.getFullYear();

    let current = new Date(currentYear, 0, 1);
    const endDate = new Date(currentYear + 1, 0, 1);

    while (current < endDate) {
      result.push({
        month: current.getMonth() + 1,
        year: current.getFullYear(),
        days: new Date(
          current.getFullYear(),
          current.getMonth() + 1,
          0,
        ).getDate(),
        name: current.toLocaleString("ru-RU", {
          month: "long",
          year: "numeric",
        }),
      });
      current.setMonth(current.getMonth() + 1);
    }
    return result;
  }, [transactions]);
  return (
    <S.CalendarWrapper>
      <S.DaysHeader>
        {daysOfWeek.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </S.DaysHeader>

      <S.CalendarScroll>
        {monthsToRender.map((m) => (
          <React.Fragment key={`${m.year}-${m.month}`}>
            <S.MonthTitle>{m.name}</S.MonthTitle>
            <S.DaysGrid>
              {renderDays(m.days, m.year.toString(), m.month)}
            </S.DaysGrid>
          </React.Fragment>
        ))}
      </S.CalendarScroll>
    </S.CalendarWrapper>
  );
};

export default Calendar;

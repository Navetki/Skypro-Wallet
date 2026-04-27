import React, { useState } from "react";
import * as S from "./Calendar.styled";

const Calendar = () => {
  const daysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

  const [range, setRange] = useState({
    start: "2024-07-10",
    end: "2024-07-13",
  });

  const handleDayClick = (dateStr) => {
    if (!range.start || (range.start && range.end)) {
      setRange({ start: dateStr, end: null });
    } else {
      if (dateStr < range.start) {
        setRange({ start: dateStr, end: range.start });
      } else {
        setRange({ ...range, end: dateStr });
      }
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

  return (
    <S.CalendarWrapper>
      <S.DaysHeader>
        {daysOfWeek.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </S.DaysHeader>

      <S.CalendarScroll>
        <S.MonthTitle>Июнь 2024</S.MonthTitle>
        <S.DaysGrid>{renderDays(30, "2024", 6)}</S.DaysGrid>

        <S.MonthTitle>Июль 2024</S.MonthTitle>
        <S.DaysGrid>{renderDays(31, "2024", 7)}</S.DaysGrid>

        <S.MonthTitle>Август 2024</S.MonthTitle>
        <S.DaysGrid>{renderDays(31, "2024", 8)}</S.DaysGrid>
      </S.CalendarScroll>
    </S.CalendarWrapper>
  );
};

export default Calendar;

import React from "react";
import { deleteTransaction } from "../../services/api";
import * as S from "./ExpenseTable.styled";
import Swal from "sweetalert2";

const categoryLabels = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жилье",
  joy: "Развлечения",
  education: "Образование",
  others: "Другое",
};
const ExpenseTable = ({ transactions, isLoading, token, refreshData }) => {
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Удалить?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#7334EA",
      confirmButtonText: "Да",
    });
    if (result.isConfirmed) {
      try {
        await deleteTransaction({ token, id });
        refreshData();
      } catch (error) {
        Swal.fire("Ошибка", error.message, "error");
      }
    }
  };

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <S.TableWrapper>
      <S.TableTitle>Таблица расходов</S.TableTitle>
      <S.Table>
        <thead>
          <tr>
            <S.Th>Дата</S.Th>
            <S.Th>Описание</S.Th>
            <S.Th>Категория</S.Th>
            <S.Th>Сумма</S.Th>
            <S.Th>Действие</S.Th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(transactions) &&
            transactions.map((item) => (
              <tr key={item._id}>
                <S.Td>{new Date(item.date).toLocaleDateString()}</S.Td>
                <S.Td>{item.description}</S.Td>
                <S.Td>{categoryLabels[item.category] || item.category}</S.Td>
                <S.Td $isBold>{item.sum} ₽</S.Td>
                <S.Td>
                  <S.DeleteBtn onClick={() => handleDelete(item._id)}>
                    🗑 Удалить
                  </S.DeleteBtn>
                </S.Td>
              </tr>
            ))}
        </tbody>
      </S.Table>
    </S.TableWrapper>
  );
};

export default ExpenseTable;

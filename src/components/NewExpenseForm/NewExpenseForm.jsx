import React, { useState } from "react";
import Swal from "sweetalert2";
import { postTransaction } from "../../services/api";
import * as S from "./NewExpenseForm.styled";

const categories = [
  { id: "food", label: "Еда", icon: "/icons/house.svg" },
  { id: "transport", label: "Транспорт", icon: "/icons/car.svg" },
  { id: "housing", label: "Жилье", icon: "/icons/house.svg" },
  { id: "joy", label: "Развлечения", icon: "/icons/games.svg" },
  { id: "education", label: "Обучение", icon: "/icons/shcool.svg" },
  { id: "others", label: "Другое", icon: "/icons/others.svg" },
];

const NewExpenseForm = ({ token, refreshData }) => {
  const [formData, setFormData] = useState({
    description: "",
    sum: "",
    category: "food",
    date: new Date().toISOString().split("T")[0],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.sum || !formData.description) return;

    try {
      await postTransaction({
        token,
        transactionData: {
          ...formData,
          sum: Number(formData.sum),
        },
      });

      setTimeout(() => {
        refreshData();
      }, 300);

      setFormData({ ...formData, description: "", sum: "" });

      Swal.fire({
        title: "Готово!",
        text: "Расход добавлен в таблицу",
        icon: "success",
        confirmButtonColor: "#7334EA",
      });
    } catch (error) {
      Swal.fire("Ошибка сервера", error.message, "error");
    }
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.Title>Новый расход</S.Title>
      <S.InputGroup>
        <label>Описание</label>
        <S.Input
          required
          minLength={4}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="На что потратили? (минимум 4 символа)"
        />
      </S.InputGroup>
      <S.InputGroup>
        <label>Категория</label>
        <S.CategoriesGrid>
          {categories.map((cat) => (
            <S.CategoryItem
              key={cat.id}
              type="button"
              $isActive={formData.category === cat.id}
              onClick={() => setFormData({ ...formData, category: cat.id })}
            >
              <img src={cat.icon} alt={cat.label} />
              {cat.label}
            </S.CategoryItem>
          ))}
        </S.CategoriesGrid>
      </S.InputGroup>
      <S.InputGroup>
        <label>Дата</label>
        <S.Input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </S.InputGroup>
      <S.InputGroup>
        <label>Сумма</label>
        <S.Input
          required
          type="number"
          value={formData.sum}
          onChange={(e) => setFormData({ ...formData, sum: e.target.value })}
          placeholder="0.00"
        />
      </S.InputGroup>
      <S.SubmitButton type="submit">Добавить новый расход</S.SubmitButton>
    </S.FormWrapper>
  );
};

export default NewExpenseForm;

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
    if (formData.description.length < 4) {
      Swal.fire({
        title: "Ошибка!",
        text: "Описание от 4 символов",
        icon: "error",
        confirmButtonColor: "#7334EA",
      });
      return;
    }
    try {
      await postTransaction({
        token,
        transactionData: { ...formData, sum: Number(formData.sum) },
      });
      setFormData({ ...formData, description: "", sum: "" });
      setTimeout(() => refreshData(), 300);
      Swal.fire({
        title: "Готово!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire("Ошибка", error.message, "error");
    }
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.Title>Новый расход</S.Title>
      <S.InputGroup>
        <label>Описание</label>
        <S.Input
          required
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          placeholder="На что потратили?"
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
              <img
                src={cat.icon}
                alt={cat.label}
                style={{ width: "20px", height: "20px" }}
              />
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

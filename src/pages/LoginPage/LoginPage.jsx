import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Добавь useNavigate
import { signIn } from "../../services/api"; // Добавь импорт функции
import * as S from "./LoginPage.styled";

// 1. Принимаем setUser (он прилетает из App.jsx)
const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // Состояние для ошибок

  // 2. Функция обработки входа
  const handleLogin = async (e) => {
    e.preventDefault(); // Чтобы страница не перезагружалась
    setError(null);

    try {
      const data = await signIn({ login, password });
      setUser(data.user); // Сохраняем данные пользователя (включая токен)
      navigate("/"); // Переходим на главную
    } catch (err) {
      setError(err.message); // Показываем ошибку ("Неверный логин/пароль")
    }
  };

  return (
    <S.Wrapper>
      <S.ContainerSignin>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Вход</h2>
            </S.ModalTtl>
            {/* 3. Добавляем onSubmit форме */}
            <S.ModalForm onSubmit={handleLogin}>
              <S.ModalInput
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
              <S.ModalInput
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Вывод ошибки, если она есть */}
              {error && (
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {error}
                </p>
              )}

              {/* Меняем тип на submit */}
              <S.ModalBtnEnter type="submit">Войти</S.ModalBtnEnter>

              <S.ModalFormGroup>
                <p>Нужно зарегистрироваться?</p>
                <Link to="/register">Регистрация здесь</Link>
              </S.ModalFormGroup>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Modal>
      </S.ContainerSignin>
    </S.Wrapper>
  );
};

export default LoginPage;

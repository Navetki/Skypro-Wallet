import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../../services/api";
import * as S from "./RegisterPage.styled";

export default function RegisterPage({ setUser }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    login: "",
    name: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("Клик сработал! Данные:", formData);
    try {
      const data = await signUp(formData);
      console.log("Ответ сервера:", data);
      setUser(data.user);
      navigate("/");
    } catch (err) {
      console.error("Ошибка при регистрации:", err.message);
      setError(err.message);
    }
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Modal>
          <S.ModalBlock>
            <S.ModalTtl>
              <h2>Регистрация</h2>
            </S.ModalTtl>
            <S.ModalForm onSubmit={handleRegister}>
              <S.ModalInput
                name="name"
                $isError={!!error}
                onChange={handleInputChange}
                type="text"
                placeholder="Имя"
              />
              <S.ModalInput
                name="login"
                $isError={!!error}
                onChange={handleInputChange}
                type="email"
                placeholder="Эл. почта"
              />
              <S.ModalInput
                name="password"
                $isError={!!error}
                onChange={handleInputChange}
                type="password"
                placeholder="Пароль"
              />

              {error && <S.ErrorText>{error}</S.ErrorText>}

              <S.ModalBtnSignup
                type="submit"
                // disabled={!formData.login || !formData.password}//
              >
                Зарегистрироваться
              </S.ModalBtnSignup>

              <S.ModalFormGroup>
                <p>
                  Уже есть аккаунт? <Link to="/login">Войдите здесь</Link>
                </p>
              </S.ModalFormGroup>
            </S.ModalForm>
          </S.ModalBlock>
        </S.Modal>
      </S.Container>
    </S.Wrapper>
  );
}

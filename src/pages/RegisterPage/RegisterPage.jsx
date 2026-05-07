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
    setError(null);

    if (formData.password.length < 4) {
      setError("Пароль должен быть не короче 4 символов");
      return;
    }

    try {
      const userData = await signUp(formData);
      setUser(userData.user);
      navigate("/");
    } catch (error) {
      setError(error.message);
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
                value={formData.name}
                onChange={handleInputChange}
                type="text"
                placeholder="Имя"
                required
              />
              <S.ModalInput
                name="login"
                $isError={!!error}
                value={formData.login}
                onChange={handleInputChange}
                type="email"
                placeholder="Эл. почта"
                required
              />
              <S.ModalInput
                name="password"
                $isError={!!error}
                value={formData.password}
                onChange={handleInputChange}
                type="password"
                placeholder="Пароль"
                required
              />

              {error && <S.ErrorText>{error}</S.ErrorText>}

              <S.ModalBtnSignup type="submit">
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

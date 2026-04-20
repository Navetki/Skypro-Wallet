import { Link } from "react-router-dom";
import * as S from "../LoginPage/LoginPage.styled";

export default function NotFoundPage() {
  return (
    <S.Wrapper>
      <S.Modal>
        <S.ModalBlock>
          <S.ModalTtl>
            <h2>404</h2>
            <p>Страница не найдена</p>
          </S.ModalTtl>
          <S.ModalBtnEnter>
            <Link to="/" style={{ color: "#fff" }}>
              Вернуться на главную
            </Link>
          </S.ModalBtnEnter>
        </S.ModalBlock>
      </S.Modal>
    </S.Wrapper>
  );
}

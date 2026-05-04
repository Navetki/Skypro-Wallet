const baseHost = "https://wedev-api.sky.pro/api/transactions";
const userHost = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  const response = await fetch(`${userHost}/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });

  if (response.status === 400) {
    throw new Error("Неверный логин или пароль");
  }
  if (!response.ok) {
    throw new Error("Ошибка сервера при входе");
  }

  return await response.json();
}
export async function signUp({ login, name, password }) {
  const response = await fetch(userHost, {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  });

  if (response.status === 400) {
    throw new Error("Пользователь с таким логином уже существует");
  }
  if (!response.ok) {
    throw new Error("Ошибка при регистрации");
  }

  return await response.json();
}

export async function getTransactions({ token }) {
  const response = await fetch(baseHost, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 401) {
    throw new Error("Срок действия сессии истек. Пожалуйста, войдите снова.");
  }
  if (!response.ok) {
    throw new Error("Не удалось загрузить список расходов");
  }

  return await response.json();
}

export async function postTransaction({ token, transactionData }) {
  const response = await fetch(baseHost, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(transactionData),
  });

  if (response.status === 401) {
    throw new Error("Авторизация просрочена");
  }
  if (!response.ok) {
    throw new Error("Ошибка при сохранении расхода");
  }

  return await response.json();
}

export async function deleteTransaction({ token, id }) {
  const response = await fetch(`${baseHost}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 401) {
    throw new Error("Недостаточно прав для удаления");
  }
  if (!response.ok) {
    throw new Error("Ошибка при удалении записи");
  }

  return await response.json();
}

const baseHost = "https://wedev-api.sky.pro/api/transactions";
const userHost = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  const response = await fetch(`${userHost}/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Ошибка при входе");
  }

  localStorage.setItem("user", JSON.stringify(result.user));
  return result;
}

export async function signUp({ login, name, password }) {
  const response = await fetch(userHost, {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  });

  const result = await response.json();
  if (!response.ok) {
    throw new Error(result.error || "Ошибка при регистрации");
  }

  localStorage.setItem("user", JSON.stringify(result.user));
  return result;
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
    headers: {
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify(transactionData),
  });

  const result = await response.json();

  if (response.status === 401) {
    throw new Error("Авторизация просрочена. Войдите заново.");
  }

  if (!response.ok) {
    throw new Error(result.error || "Ошибка при сохранении расхода");
  }

  return result;
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

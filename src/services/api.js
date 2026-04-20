const baseHost = "https://wedev-api.sky.pro/api/transactions";
const userHost = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }) {
  const response = await fetch(`${userHost}/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });
  if (!response.ok) throw new Error("Ошибка входа");
  return await response.json();
}

// РЕГИСТРАЦИЯ
export async function signUp({ login, name, password }) {
  const response = await fetch(userHost, {
    method: "POST",
    body: JSON.stringify({ login, name, password }),
  });
  if (!response.ok) throw new Error("Ошибка регистрации");
  return await response.json();
}

// ПОЛУЧИТЬ СПИСОК
export async function getTransactions({ token }) {
  const response = await fetch(baseHost, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error("Ошибка загрузки");
  return await response.json();
}

// ДОБАВИТЬ
export async function postTransaction({ token, transactionData }) {
  const response = await fetch(baseHost, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(transactionData),
  });
  if (!response.ok) throw new Error("Ошибка добавления");
  return await response.json();
}

// УДАЛИТЬ
export async function deleteTransaction({ token, id }) {
  const response = await fetch(`${baseHost}/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!response.ok) throw new Error("Ошибка удаления");
  return await response.json();
}

/*
  Ви маєте форму реєстрації користувачів. 
  Іноді потрібно попередньо заповнити форму даними користувача для оновлення його профілю. 
  Однак вам не завжди потрібно заповнити всі поля. Наприклад, користувач може хотіти оновити лише свій email та пароль, 
  залишивши ім'я та прізвище без змін.

  Виправте тип у аргументі функції так, щоб не було помилок типу.
*/

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
// всі значення заглушки для того щоб користувач зрозумів, які можна оновити дані після створення
const initialUserData: User = {
  name: "User Name",
  surname: "User Surname",
  email: "User email",
  password: "User password",
};

const OldUserData: User = {
  name: "Volodymyr",
  surname: "Rybak",
  email: "rybak@gmail.com",
  password: "strong!pass",
};

function createOrUpdateUser(initialValues: Partial<User>, oldData: User): User {
  // Якщо це оновлення то повинен бути 2-й параметр
  if (oldData !== undefined) {
    return { ...oldData, ...initialValues };
  }
  // якщо старої дати нема, то це створення
  return { ...initialUserData, ...initialValues };
}

createOrUpdateUser(
  { email: "user@mail.com", password: "password123" },
  OldUserData
);

export {};

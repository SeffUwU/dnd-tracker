import { EnglishLocale } from "./en";

export const RussianLocale: typeof EnglishLocale = {
  statusMessage: {
    error: "Ошибка!",
    success: "Успех!",
  },
  auth: {
    signUpSuccess: "Регистрация прошла успешно.",
    logoutSuccess: "Сессия завершена успешно.",
    signInSuccess: "Сессия начата успешно.",
  },
  forms: {
    login: {
      title: "Введите вашу почту и пароль чтобы авторизоваться.",
      loginButton: "Войти",
      registerQuestion: "Впервые? Нажмите чтобы зарегистрироваться..",
    },
    signUp: {
      title: "Введите вашу почту и пароль чтобы зарегистрироваться",
      signUpButton: "Зарегистрироваться",
      loginQuestion: "Уже есть аккаунт? Войти..",
    },
  },
  sidebar: {
    home: "Главная",
    users: "Пользователи",
    characters: "Персонажи",
    campaigns: "Компании",
    profile: "Профиль",
  },
  words: {
    email: "Почта",
    password: "Пароль",
    login: "Авторизация",
    signUp: "Зарегистрироваться",
  },
};

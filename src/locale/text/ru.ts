import { EnglishLocale } from './en';

export const RussianLocale: typeof EnglishLocale = {
  statusMessage: {
    error: 'Ошибка!',
    success: 'Успех!',
  },
  auth: {
    signUpSuccess: 'Регистрация прошла успешно.',
    logoutSuccess: 'Сессия завершена успешно.',
    signInSuccess: 'Сессия начата успешно.',
  },
  forms: {
    login: {
      title: 'Введите вашу почту и пароль чтобы авторизоваться.',
      loginButton: 'Войти',
      registerQuestion: 'Впервые? Нажмите чтобы зарегистрироваться..',
    },
    signUp: {
      title: 'Введите вашу почту и пароль чтобы зарегистрироваться',
      signUpButton: 'Зарегистрироваться',
      loginQuestion: 'Уже есть аккаунт? Войти..',
    },
  },
  sidebar: {
    home: 'Главная',
    users: 'Пользователи',
    characters: 'Персонажи',
    campaigns: 'Кампании',
    items: 'Предметы',
    profile: 'Профиль',
    theme: 'Тема',
    language: 'Язык',
  },
  headers: {
    campaigns: 'Ваши активные кампании будут отображены здесь.',
  },
  tooltips: {
    campaigns: {
      madeByYou: 'Вы ведете',
      campaignGM: 'Ведет этот GM',
    },
  },
  words: {
    email: 'Почта',
    password: 'Пароль',
    login: 'Авторизация',
    signUp: 'Зарегистрироваться',
  },
};

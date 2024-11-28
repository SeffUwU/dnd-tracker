import { EnglishLocale } from './en';

export const RussianLocale: typeof EnglishLocale = {
  statusTitle: {
    error: 'Ошибка!',
    success: 'Успех!',
  },
  statusMessage: { campaignJoinedSuccessful: 'Успешно вступили в кампанию!' },
  auth: {
    signUpSuccess: 'Регистрация прошла успешно.',
    logoutSuccess: 'Сессия завершена успешно.',
    signInSuccess: 'Сессия начата успешно.',
    signUp: 'Зарегистрироваться',
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
  pageTitles: { joinCampaign: 'Вступить в кампанию' },
  pageSpecific: {
    joinCampaign: {
      message:
        'Чтобы вступить в кампанию вам нужен инвайт-код. Эти инвайт-коды уникальные для каждой кампании. Вам необходимо попросить этот код у вашего ДМа.',
      directions: 'Введите ваш инвайт-код ниже:',
    },
  },
  headers: {
    campaigns: 'Ваши активные кампании будут отображены здесь.',
    joinCampaign: 'На этой странице вы можете вступить в кампанию.',
  },
  tooltips: {
    campaigns: {
      madeByYou: 'Вы ведете',
      campaignGM: 'Ведет этот GM',
    },
  },
  general: {
    joinedAt: 'присоединился',
  },
  capitalizedWords: {
    invite: 'Пригласить',
    create: 'Создать',
    join: 'Вступить',
    name: 'Название',
    description: 'Описание',
    players: 'Игроки',
    creator: 'Создатель',
    email: 'Почта',
    password: 'Пароль',
    login: 'Логин',
    you: 'Вы',
    action: 'Действие',
  },
  ui: {
    initializingContexts: 'Инициализируем контексты...',
  },
};

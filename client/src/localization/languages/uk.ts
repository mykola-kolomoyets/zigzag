const uk = {
  menu: {
    main: {
      title: "Головна"
    },
    profile: {
      title: "Профіль"
    },
    logout: {
      title: "Вийти"
    }
  },

  lang: {
    title: "Мова:"
  },

  pages: {
    login: {
      title: "Вітаю!",
      subtitle: {
        text: "Ще не зареєстрований?",
        link: "Реєстрація"
      },
      inputs: {
        login: {
          placeholder: "Введіть логін або пошту"
        },
        password: {
          placeholder: "Введіть пароль"
        },
        submit: "Увійти"
      }
    },
    register: {
      title: "Реєстрація",
      subtitle: {
        text: "Вже маєш аккаунт?",
        link: "Увійти"
      },
      inputs: {
        name: {
          placeholder: "Введіть логін"
        },
        email: {
          placeholder: "Введіть пошту"
        },
        password: {
          placeholder: "Введіть пароль"
        },
        submit: "Зареєструватися"
      }
    },
    main: {
      title: "Слава Україні!",
      start: "Нова гра",
      fieldSize: {
        title: "Розміри поля"
      },
      difficulty: {
        title: "Рівень складності",
        easy: "Проста",
        middle: "Середня",
        hard: "Складна",
      },
      submit: "Почати"
    },
    profile: {
      title: "Профіль",
      subtitle: "Ваша статистика",
      totalGames: "Зіграно ігор",
      lastGame: {
        title: "Про останню гру",
        moves: "Кількість ходів",
        field: "Розміри поля"
      }
    },
    onboarding: {
      title: "Правила ЗigЗag",
      subtitle: "Ходіть як кінь у шахах. Ваша ціль - заповнити всі квадратики числами."
    }
  },

  button: {
    close: "Close"
  },
  game: {
    cancelMove: "Відмінити хід",
    finishGame: "Перервати гру",
    tutorial: "Як грати?"
  },

  popup: {
    success: {
      title: "УРА!!!",
      subtitle: "Ви перемогли!!!"
    },
    fail: {
      title: "Упс(",
      subtitle: "Гру завершено, ви не склали поле"
    }
  }
};

export default uk;
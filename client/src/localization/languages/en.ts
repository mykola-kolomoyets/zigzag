const en = {
  menu: {
    main: {
      title: "Main"
    },
    profile: {
      title: "Profile"
    },
    logout: {
      title: "Logout"
    }
  },

  pages: {
    login: {
      title: "Hello Again!",
      subtitle: {
        text: "Not registered?",
        link: "Register"
      },
      inputs: {
        login: {
          placeholder: "Enter login or email"
        },
        password: {
          placeholder: "Enter password"
        },
        submit: "Login"
      }
    },
    register: {
      title: "Register",
      subtitle: {
        text: "Not logined?",
        link: "Login"
      },
      inputs: {
        name: {
          placeholder: "Enter name"
        },
        email: {
          placeholder: "Enter email"
        },
        password: {
          placeholder: "Enter password"
        },
        submit: "Register"
      }
    },
    main: {
      title: "Welcome back",
      start: "Start the new game",
      fieldSize: {
        title: "Field Size"
      },
      difficulty: {
        title: "Difficulty",
        easy: "Easy",
        middle: "Middle",
        hard: "Hard",
      },
      submit: "Start Game"
    },
    profile: {
      title: "Profile",
      subtitle: "Your statistics",
      totalGames: "Total games played",
      lastGame: {
        title: "Last Game",
        moves: "Moves",
        field: "Field"
      }
    }
  },

  game: {
    cancelMove: "Cancel move",
    finishGame: "Finish game",
  },

  popup: {
    success: {
      title: "Congritulations!!!",
      subtitle: "YOU WIN!!!"
    },
    fail: {
      title: "Game Over",
      subtitle: "YOU LOSE"
    }
  }
};

export default en;
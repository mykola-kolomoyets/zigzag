import { AlertType, AppStore, Difficulty, Locales } from "../../utils";
import Context from "./context";

export const initialAppState: AppStore = {
  isLoading: false,
  difficulty: Difficulty.easy,
  showAlert: false,
  alertType: AlertType.warning,
  alertText: '',
  user: {
    _id: '',
    id: '',
    name: '',
    email: ''
  },
  token: '',
  language: Locales.en
};

const AppContext = new Context(initialAppState);

export default AppContext;
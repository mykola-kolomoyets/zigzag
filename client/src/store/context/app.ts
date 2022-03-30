import { AlertType, AppStore, Difficulty } from "../../utils";
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
  token: ''
};

const AppContext = new Context(initialAppState);

export default AppContext;
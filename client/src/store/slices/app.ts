import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppStore, Difficulty, AlertType, Locales } from '../../utils';

const initialState: AppStore = {
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

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<Difficulty>) => {
      state.difficulty = action.payload;
    },
    showAlert: (state, action: PayloadAction<Partial<Pick<AppStore, 'showAlert' | 'alertType' | 'alertText'>>>) => {
      state = { ...state, ...action.payload }
    },
    hideAlert: (state) => {
      state = {
        ...state,
        showAlert: false,
        alertType: AlertType.warning,
        alertText: '',
      }
    },
    setUserData: (state, action: PayloadAction<Partial<typeof initialState.user>>) => {
      state.user = { ...state.user, ...action.payload };
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Locales>) => {
      state.language = action.payload;
    }
  }
});

export const {
  setIsLoading,
  setDifficulty,
  showAlert,
  hideAlert,
  setUserData,
  setToken,
  setLanguage
} = appSlice.actions;

export default appSlice.reducer;
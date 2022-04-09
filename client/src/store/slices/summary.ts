import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SummaryStore } from '../../utils';

export const summaryActionTypes = {
  show: 'summary/show',
  hide: 'summary/hide'
}

const initialState: SummaryStore = {
  isShow: false,
  isSuccess: false,
  title: '',
  subtitle: ''
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    show: (state, action: PayloadAction<typeof initialState>) => {
      state = { ...action.payload };
    },
    hide: (state) => {
      state = { ...initialState};
    }
  }
});

export const { show, hide } = summarySlice.actions;

export default summarySlice.reducer;
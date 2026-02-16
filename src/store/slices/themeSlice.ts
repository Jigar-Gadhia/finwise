import {createSlice} from '@reduxjs/toolkit';

export type ThemeMode = 'light' | 'dark';

export interface ThemeState {
  mode: ThemeMode;
  isFirstLaunch?: boolean;
}

const initialState: ThemeState = {
  mode: 'dark',
  isFirstLaunch: true,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    },
    completeOnboard: state => {
      state.isFirstLaunch = false;
    },
  },
});

export const {toggleTheme, setTheme, completeOnboard} = themeSlice.actions;
export default themeSlice.reducer;

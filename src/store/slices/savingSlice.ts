import {createSlice} from '@reduxjs/toolkit';
import {categoriesType} from '../../utils/categoriesData';

export interface SavingState {
  item: categoriesType;
}

const initialState: SavingState = {
  item: {
    id: 0,
    icon: 'travel',
    name: 'travel',
  },
};

export const savingSlice = createSlice({
  name: 'saving',
  initialState,
  reducers: {
    setSaving: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const {setSaving} = savingSlice.actions;
export default savingSlice.reducer;

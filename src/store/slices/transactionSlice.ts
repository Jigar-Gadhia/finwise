import {createSlice} from '@reduxjs/toolkit';
import {categoriesType} from '../../utils/categoriesData';

export interface TransactionState {
  item: categoriesType;
}

const initialState: TransactionState = {
  item: {
    id: 0,
    icon: 'food',
    name: 'food',
  },
};

export const transactionSlice = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    setTransaction: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const {setTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;

import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface ActiveBlockState {
  activeBlock: string
}

const initialState: ActiveBlockState = {
  activeBlock: '',
}

const activeBlockSlice = createSlice({
  name: 'activeBlock',
  initialState,
  reducers: {
    setActiveBlock: (state, action: PayloadAction<string>) => {
      state.activeBlock = action.payload;
    }
  }
})

export const {setActiveBlock} = activeBlockSlice.actions; // Экспорт действия
export const activeBlockReducer = activeBlockSlice.reducer; // Экспорт редьюсера
import {createSlice} from '@reduxjs/toolkit'

interface ActiveBlockState {
  activeLanguage: 'EN' | 'RU'
}

const initialState: ActiveBlockState = {
  activeLanguage: 'EN',
}

const activeLanguageSlice = createSlice({
  name: 'activeLanguage',
  initialState,
  reducers: {
    setActiveLanguage: (state) => {
      state.activeLanguage = state.activeLanguage === 'RU' ? 'EN' : 'RU';
    }
  }
})

export const {setActiveLanguage} = activeLanguageSlice.actions; // Экспорт действия
export const activeLanguageReducer = activeLanguageSlice.reducer; // Экспорт редьюсера
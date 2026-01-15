import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CalendarState, TempDate } from './types'

const initialState: CalendarState = {
  selectedDate: new Date().toISOString(),
  tempDate: { month: new Date().getMonth(), year: new Date().getFullYear() },
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    selectDate(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload
    },
    selectTempDate(state, action: PayloadAction<TempDate>) {
      state.tempDate = action.payload
    },
  },
})

export const { selectDate, selectTempDate } = calendarSlice.actions

export const calendarReducer = calendarSlice.reducer

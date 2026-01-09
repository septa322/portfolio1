import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { CalendarState } from './types'

const initialState: CalendarState = {
  selectedDate: new Date().toISOString(),
  isVisible: false,
}

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    selectDate(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload
    },
    toggleVisible(state) {
      state.isVisible = !state.isVisible
    },
  },
})

export const { selectDate, toggleVisible } = calendarSlice.actions

export const calendarReducer = calendarSlice.reducer

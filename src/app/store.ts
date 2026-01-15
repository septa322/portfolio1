import { configureStore } from '@reduxjs/toolkit'
import { calendarReducer } from '../entities/calendar/model/calendarSlice'
import { exerciseReducer } from '../entities/exercise/model/exerciseSlice'
import { templateReducer } from '../entities/Templates/model/templatesSlice'

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    exercise: exerciseReducer,
    templates: templateReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

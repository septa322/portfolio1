import { configureStore } from '@reduxjs/toolkit'
import { calendarReducer } from '../entities/calendar/model/calendarSlice'
import { exerciseReducer } from '../entities/exercise/model/exerciseSlice'
import { templateReducer } from '../entities/Templates/model/templatesSlice'
import { workoutReducer } from '../entities/workout/model/workoutSlice'

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    exercise: exerciseReducer,
    templates: templateReducer,
    workouts: workoutReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Exercise } from './types'

const STORAGE_KEY = 'workout_diary_exercises'

const stored = localStorage.getItem(STORAGE_KEY)
const initialState: Exercise[] = stored
  ? JSON.parse(stored)
  : [
      { id: '1', name: 'Жим штанги лежа', category: 'Грудь' },
      { id: '2', name: 'Приседания со штангой', category: 'Ноги' },
      { id: '3', name: 'Становая тяга', category: 'Спина' },
      { id: '4', name: 'Жим гантелей на наклонной', category: 'Грудь' },
      { id: '5', name: 'Подтягивания', category: 'Спина' },
      { id: '6', name: 'Тяга штанги в наклоне', category: 'Спина' },
      { id: '7', name: 'Жим штанги стоя', category: 'Плечи' },
      { id: '8', name: 'Разгибания на трицепс', category: 'Руки' },
      { id: '9', name: 'Подъем штанги на бицепс', category: 'Руки' },
      { id: '10', name: 'Выпады с гантелями', category: 'Ноги' },
    ]

const exerciseSlice = createSlice({
  name: 'exercise',
  initialState,
  reducers: {
    addExercise(state, actions: PayloadAction<Exercise>) {
      state.push(actions.payload)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    },
    deleteExercise(state, actions: PayloadAction<string>) {
      const newState = state.filter((ex) => ex.id !== actions.payload)

      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))

      return newState
    },
  },
})

export const { addExercise, deleteExercise } = exerciseSlice.actions

export const exerciseReducer = exerciseSlice.reducer

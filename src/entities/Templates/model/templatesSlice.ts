import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { WorkoutTemplate } from './types'

const STORAGE_KEY = 'workout_diary_templates'

const initialState: WorkoutTemplate[] = []

const templateSlice = createSlice({
  name: 'templates',
  initialState,
  reducers: {
    addTemplate(state, actions: PayloadAction<WorkoutTemplate>) {
      state.push(actions.payload)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    },
    updateTemplate(state, actions: PayloadAction<WorkoutTemplate>) {
      state.map((template) =>
        template.id === actions.payload.id ? { ...actions.payload } : template
      )
    },
    deleteTemplate(state, actions: PayloadAction<string>) {
      const newState = state.filter((template) => template.id !== actions.payload)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
      return newState
    },
  },
})

export const { addTemplate, updateTemplate, deleteTemplate } = templateSlice.actions

export const templateReducer = templateSlice.reducer

import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ExerciseSet, Workout, WorkoutExercise } from './types'

const STORAGE_KEY = 'workout_diary_workouts'

const stored = localStorage.getItem(STORAGE_KEY)

const initialState: Workout[] = stored ? JSON.parse(stored) : []

const workoutSlice = createSlice({
  name: 'workouts',
  initialState,
  reducers: {
    addExerciseToWorkout(
      state,
      action: PayloadAction<{ date: string; exercise: WorkoutExercise }>
    ) {
      const workout = state.find((w) => w.date === action.payload.date)
      if (workout) {
        workout.exercises.push(action.payload.exercise)
      } else {
        state.push({
          id: Date.now().toString(),
          date: action.payload.date,
          exercises: [action.payload.exercise],
        })
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
      console.log({ ...state })
    },
    deleteExerciseFromWorkout(
      state,
      actions: PayloadAction<{ date: string; exercise: WorkoutExercise }>
    ) {
      state.map((w) =>
        w.date === actions.payload.date
          ? w.exercises.filter((ex) => ex.id !== actions.payload.exercise.id)
          : w
      )
    },
    addSet(
      state,
      actions: PayloadAction<{ date: string; exercise: WorkoutExercise; set: ExerciseSet }>
    ) {
      state.map((w) =>
        w.date === actions.payload.date
          ? w.exercises.map((ex) =>
              ex.id === actions.payload.exercise.id ? ex.sets.push(actions.payload.set) : ex
            )
          : w
      )
    },
    deleteSet(
      state,
      actions: PayloadAction<{ date: string; exercise: WorkoutExercise; indexOfSet: number }>
    ) {
      state.map((w) =>
        w.date === actions.payload.date
          ? w.exercises.map((ex) =>
              ex.id === actions.payload.exercise.id
                ? ex.sets.filter((_, ind) => ind !== actions.payload.indexOfSet)
                : ex
            )
          : w
      )
    },
  },
})

export const { addExerciseToWorkout, deleteExerciseFromWorkout, addSet, deleteSet } =
  workoutSlice.actions

export const workoutReducer = workoutSlice.reducer

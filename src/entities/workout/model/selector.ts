import type { RootState } from '../../../app/store'
import type { Workout } from './types'

export const selectTemplates = (state: RootState): Workout[] => state.workouts

export const selectWorkoutByDate = (date: string) => (state: RootState) =>
  state.workouts.find((w) => w.date === date)

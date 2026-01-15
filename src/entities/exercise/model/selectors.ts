import type { RootState } from '../../../app/store'
import type { Exercise } from './types'

export const selectExercise = (state: RootState): Exercise[] => state.exercise

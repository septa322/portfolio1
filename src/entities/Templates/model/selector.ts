import type { RootState } from '../../../app/store'
import type { WorkoutTemplate } from './types'

export const selectTemplates = (state: RootState): WorkoutTemplate[] => state.templates

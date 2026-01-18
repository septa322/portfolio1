export type Workout = {
  id: string
  date: string
  exercises: WorkoutExercise[]
}

export type WorkoutExercise = {
  id: string
  name: string
  sets: ExerciseSet[]
}

export type ExerciseSet = {
  reps?: number
  weight?: number
}

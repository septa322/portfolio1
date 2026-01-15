export interface WorkoutTemplate {
  id: string
  name: string
  exercises: { id: string; name: string; category: string }[]
}

import { useSelector } from 'react-redux'
import { selectExercise } from '../model/selectors'
import ExerciseItem from './ExerciseItem.ui'

export default function ExerciseList() {
  const exercises = useSelector(selectExercise)

  return (
    <div className="flex flex-col items-center">
      {exercises.map((exercise) => {
        return <ExerciseItem key={exercise.id} exercise={exercise} deleteBtn={true} />
      })}
    </div>
  )
}

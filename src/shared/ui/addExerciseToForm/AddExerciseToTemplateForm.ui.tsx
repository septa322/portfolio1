import { useSelector } from 'react-redux'
import { selectExercise } from '../../../entities/exercise/model/selectors'
import ExerciseItem from '../../../entities/exercise/ui/ExerciseItem.ui'
import CloseIcon from '../icons/close'
import type { Exercise } from '../../../entities/exercise/model/types'

type AddExerciseToFormProps = {
  setAddExerciseFormIsVisible: (value: boolean) => void
  handleAddExercises: (exercise: Exercise) => void
}

export default function AddExerciseToForm({
  setAddExerciseFormIsVisible,
  handleAddExercises,
}: AddExerciseToFormProps) {
  const exercises = useSelector(selectExercise)
  return (
    <>
      <div className="flex justify-between items-center w-full h-8 mb-3">
        <h1 className="text-2xl mb-1">Выберете упражнение</h1>
        <button
          className="w-7 h-7 p-0.5 rounded-lg cursor-pointer hover:bg-zinc-500"
          onClick={() => setAddExerciseFormIsVisible(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <div className="flex flex-col">
        {exercises.map((exercise) => {
          return (
            <div onClick={() => handleAddExercises(exercise)}>
              <ExerciseItem
                classes={'hover:bg-zinc-700 cursor-pointer'}
                key={exercise.id}
                exercise={exercise}
                deleteBtn={false}
              />
            </div>
          )
        })}
      </div>
    </>
  )
}

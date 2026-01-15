import { useSelector } from 'react-redux'
import { selectExercise } from '../../exercise/model/selectors'
import ExerciseItem from '../../exercise/ui/ExerciseItem.ui'
import CloseIcon from '../../../shared/ui/icons/close'
import type { Exercise } from '../../exercise/model/types'

type setAddExerciseFormIsVisibleProps = {
  setAddExerciseFormIsVisible: (value: boolean) => void
  handleAddExercises: (exercise: Exercise) => void
}

export default function AddExerciseToTemplateForm({
  setAddExerciseFormIsVisible,
  handleAddExercises,
}: setAddExerciseFormIsVisibleProps) {
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

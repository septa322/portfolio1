import { useDispatch } from 'react-redux'
import TrashIcon from '../../../shared/ui/icons/trash'
import type { Exercise } from '../model/types'
import { deleteExercise } from '../model/exerciseSlice'

type ExerciseItemProps = {
  exercise: Exercise
  deleteBtn: boolean
  classes?: string
}

export default function ExerciseItem({ exercise, deleteBtn, classes }: ExerciseItemProps) {
  const dispatch = useDispatch()

  return (
    <div className={`flex justify-between w-full h-20 p-3 mb-2 rounded-xl bg-zinc-800 ${classes}`}>
      <div>
        <h2 className="text-base mb-1">{exercise.name}</h2>
        <h3 className="text-sm text-zinc-400">{exercise.category}</h3>
      </div>
      {deleteBtn && (
        <button className="cursor-pointer" onClick={() => dispatch(deleteExercise(exercise.id))}>
          <TrashIcon />
        </button>
      )}
    </div>
  )
}

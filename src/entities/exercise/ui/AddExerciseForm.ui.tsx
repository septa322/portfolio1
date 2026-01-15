import { useState } from 'react'
import Button from '../../../shared/ui/button/Button'
import CloseIcon from '../../../shared/ui/icons/close'
import Input from '../../../shared/ui/input/Input'
import { useDispatch } from 'react-redux'
import { addExercise } from '../model/exerciseSlice'

type AddExerciseFormProps = {
  setAddExerciseFormIsVisible: (value: boolean) => void
}

export default function AddExerciseForm({ setAddExerciseFormIsVisible }: AddExerciseFormProps) {
  const [exerciseName, setExerciseName] = useState<string>('')
  const [exerciseCategory, setExerciseCategory] = useState<string>('')

  const dispatch = useDispatch()
  return (
    <>
      <div className="flex justify-between items-center w-full h-8 mb-2">
        <h1 className="text-2xl mb-1">Новое упражнение</h1>
        <button
          className="w-7 h-7 p-0.5 rounded-lg cursor-pointer hover:bg-zinc-500"
          onClick={() => setAddExerciseFormIsVisible(false)}
        >
          <CloseIcon />
        </button>
      </div>
      <form className="flex flex-col w-full rounded-xl bg-zinc-800">
        <Input
          value={exerciseName}
          onChange={setExerciseName}
          placeholder={'Название упражнения'}
        />
        <Input
          value={exerciseCategory}
          onChange={setExerciseCategory}
          placeholder={'Категория (грудь, спина, ноги...)'}
        />
      </form>

      <Button
        color="orange"
        onClick={() => {
          dispatch(
            addExercise({
              id: new Date().toString(),
              name: exerciseName,
              category: exerciseCategory,
            })
          )
          setAddExerciseFormIsVisible(false)
        }}
      >
        Сохранить
      </Button>
    </>
  )
}

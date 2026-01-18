import { useState } from 'react'
import AddExerciseToForm from '../../../shared/ui/addExerciseToForm/AddExerciseToTemplateForm.ui'
import Button from '../../../shared/ui/button/Button'
import LowTabModal from '../../../shared/ui/lowTabModal/LowTabModal'
import type { WorkoutExercise } from '../model/types'
import type { Exercise } from '../../exercise/model/types'
import WorkoutHistory from './WorkoutHistory.ui'
import { useDispatch, useSelector } from 'react-redux'
import { addExerciseToWorkout } from '../model/workoutSlice'
import { selectSelectedDate } from '../../calendar/model/selectors'
import { selectWorkoutByDate } from '../model/selector'

export default function AddWorkoutForm() {
  const dispatch = useDispatch()

  const selectedDate = useSelector(selectSelectedDate)

  const [AddExerciseFormIsVisible, setAddExerciseFormIsVisible] = useState(false)
  const [workoutExercises, setExercises] = useState<WorkoutExercise[]>([])
  const workout = useSelector(selectWorkoutByDate(selectedDate))

  function handleAddExercises(exercise: Exercise) {
    if (workoutExercises.some((e) => e.id === exercise.id)) {
      return
    }

    setExercises((prev) => [{ ...exercise, sets: [] }, ...prev])
    dispatch(
      addExerciseToWorkout({
        date: selectedDate,
        exercise: { id: exercise.id, name: exercise.name, sets: [] },
      })
    )
    setAddExerciseFormIsVisible(false)
  }
  return (
    <>
      <h2 className="text-xl mt-2 mb-3">Сегодняшняя тренировка</h2>
      <div>
        <Button onClick={() => setAddExerciseFormIsVisible(true)} color="orange">
          Добавить упражнение
        </Button>
        <div className="mb-2" />
        <Button color="zinc">Из шаблона</Button>
      </div>

      {workout ? (
        workout.exercises.map((ex) => {
          return (
            <div
              key={ex.id}
              className="flex flex-col w-full h-fit px-3 pb-3 mb-2 rounded-xl bg-zinc-800"
            >
              <div className="flex justify-between items-center pt-5 h-10">
                <h1 className="text-base">{ex.name}</h1>
                <div>
                  <button className="cursor-pointer"></button>
                </div>
              </div>
            </div>
          )
        })
      ) : (
        <WorkoutHistory />
      )}
      {AddExerciseFormIsVisible && (
        <LowTabModal>
          <AddExerciseToForm
            setAddExerciseFormIsVisible={setAddExerciseFormIsVisible}
            handleAddExercises={handleAddExercises}
          />
        </LowTabModal>
      )}
    </>
  )
}

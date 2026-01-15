import { useState } from 'react'
import ExerciseList from '../../../entities/exercise/ui/ExerciseList.ui'
import Button from '../../../shared/ui/button/Button'
import LowTabModal from '../../../shared/ui/lowTabModal/LowTabModal'
import AddExerciseForm from '../../../entities/exercise/ui/AddExerciseForm.ui'

function ExercisePage() {
  const [addExerciseFormIsVisible, setAddExerciseFormIsVisible] = useState(false)

  return (
    <div className={`flex flex-col`}>
      <Button color="orange" onClick={() => setAddExerciseFormIsVisible(!addExerciseFormIsVisible)}>
        Новое упражнение
      </Button>
      <div className="flex flex-col mt-3">
        <ExerciseList />
      </div>
      {addExerciseFormIsVisible && (
        <LowTabModal>
          <AddExerciseForm setAddExerciseFormIsVisible={setAddExerciseFormIsVisible} />
        </LowTabModal>
      )}
    </div>
  )
}

export { ExercisePage }

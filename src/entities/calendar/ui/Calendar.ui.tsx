import CalendarIcon from '../../../shared/ui/icons/calendar'
import { getMonthDays } from '../../../shared/lib/getDaysInMonth'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectIsCalendarVisible,
  selectSelectedDate,
  selectSelectTempDate,
} from '../model/selectors'
import { selectDate, selectTempDate, toggleVisible } from '../model/calendarSlice'
import getFormattedDateFromISO from '../../../shared/lib/getFormattedDateFromISO'

export default function Calendar() {
  const dispatch = useDispatch()
  const selectedDate = useSelector(selectSelectedDate)
  const calendarIsOpen = useSelector(selectIsCalendarVisible)

  return (
    <div className="">
      <button
        className="flex items-center w-full h-12 my-2 p-3 rounded-xl cursor-pointer bg-zinc-800 hover:bg-zinc-700"
        onClick={() => dispatch(toggleVisible())}
      >
        <CalendarIcon />
        {getFormattedDateFromISO(selectedDate)}
      </button>
      {calendarIsOpen && <CalendarGrid />}
    </div>
  )
}

function CalendarGrid() {
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  const dispatch = useDispatch()
  const tempDate = useSelector(selectSelectTempDate)

  const { offset, days } = getMonthDays(tempDate.year, tempDate.month)

  function handleChangeDate(operator: '+' | '-') {
    if (operator === '+') {
      if (tempDate.month === 11) {
        dispatch(selectTempDate({ month: 0, year: tempDate.year + 1 }))
      } else {
        dispatch(selectTempDate({ month: tempDate.month + 1, year: tempDate.year }))
      }
    }
    if (operator === '-') {
      if (tempDate.month === 0) {
        dispatch(selectTempDate({ month: 12, year: tempDate.year - 1 }))
      } else {
        dispatch(selectTempDate({ month: tempDate.month - 1, year: tempDate.year }))
      }
    }
  }

  return (
    <div className="p-3 rounded-xl bg-zinc-800">
      <div className="flex justify-between items-center">
        <button onClick={() => handleChangeDate('-')}>&lt;</button>
        <span className="text-sm">
          {new Date(tempDate.year, tempDate.month).toLocaleString('ru-RU', {
            month: 'long',
            year: 'numeric',
          })}
        </span>
        <button onClick={() => handleChangeDate('+')}>&gt;</button>
      </div>
      <div className="grid grid-cols-7 my-3 text-center text-sm text-zinc-400">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {Array.from({ length: offset }).map((_, ind) => (
          <div key={ind} />
        ))}

        {days.map((day) => {
          return (
            <button
              className="
              aspect-square
              rounded-xl
              text-sm
              text-white
              hover:bg-zinc-700
              focus:outline-none
              focus:ring-2
              focus:ring-orange-500
            "
              onClick={() =>
                dispatch(
                  selectDate(
                    `${tempDate.year}-${tempDate.month < 10 ? '0' : ''}${tempDate.month + 1}-${day}T14:30:00Z`
                  )
                )
              } // исправить вот это!!!
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

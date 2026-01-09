import { useState } from 'react'
import CalendarIcon from '../../../shared/ui/icons/calendar'
import { getMonthDays } from '../../../shared/lib/getDaysInMonth'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsCalendarVisible, selectSelectedDate } from '../model/selectors'
import { selectDate, toggleVisible } from '../model/calendarSlice'

export default function Calendar() {
  const today = new Date().toLocaleString('ru-RU', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })

  const dispatch = useDispatch()
  const selectedDay = useSelector(selectSelectedDate)
  console.log(selectedDay)
  const calendarIsOpen = useSelector(selectIsCalendarVisible)

  return (
    <div className="">
      <button
        className="flex items-center w-full h-12 my-2 rounded-xl cursor-pointer bg-zinc-800 hover:bg-zinc-700"
        onClick={() => dispatch(toggleVisible())}
      >
        <CalendarIcon />
        {today}
      </button>
      {calendarIsOpen && <CalendarGrid />}
    </div>
  )
}

function CalendarGrid() {
  const dispatch = useDispatch()
  const { offset, days } = getMonthDays(2026, 0)
  const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

  return (
    <>
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
              onClick={() => dispatch(selectDate(`2026-01-${day}T14:30:00Z`))} // исправить вот это!!!
            >
              {day}
            </button>
          )
        })}
      </div>
    </>
  )
}

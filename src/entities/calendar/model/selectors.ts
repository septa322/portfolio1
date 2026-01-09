// entities/calendar/model/selectors.ts
import type { RootState } from '../../../app/store'
import type { CalendarState } from './types'

// функция для получения всего состояния календаря
export const selectCalendar = (state: RootState): CalendarState => state.calendar

// конкретные селекторы
export const selectSelectedDate = (state: RootState): string => state.calendar.selectedDate

export const selectIsCalendarVisible = (state: RootState): boolean => state.calendar.isVisible

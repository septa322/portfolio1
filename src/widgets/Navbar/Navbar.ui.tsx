import { NavLink } from 'react-router'
import CalendarIcon from '../../shared/ui/icons/calendar.tsx'
import KubokIcon from '../../shared/ui/icons/kubok.tsx'

export default function Navbar() {
  return (
    <div className="fixed left-0 bottom-0 right-0 z-20 flex justify-center h-20 bg-zinc-900">
      <main className="flex justify-between items-center w-70 text-zinc-300">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? 'text-orange-500' : ''} flex flex-col justify-center items-center`
          }
        >
          <CalendarIcon color={'text-zinc-300'} />
          <span>Тренировка</span>
        </NavLink>
        <NavLink
          to="/lib"
          className={({ isActive }) =>
            `${isActive ? 'text-orange-500' : ''} flex flex-col justify-center items-center`
          }
        >
          <KubokIcon />
          <span>Шаблоны</span>
        </NavLink>
      </main>
    </div>
  )
}

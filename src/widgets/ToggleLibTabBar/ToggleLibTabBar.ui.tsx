import { NavLink } from 'react-router'
import CreateIcon from '../../shared/ui/icons/create'
import KubokIcon from '../../shared/ui/icons/kubok'
import ListIcon from '../../shared/ui/icons/list'

const buttonClasses = `flex justify-center items-center w-29 h-9 rounded-xl cursor-pointer  hover:text-white`
const activeButtonClasses = `bg-zinc-800 text-white`

export default function ToggleLibTabBar() {
  return (
    <div>
      <div className="flex justify-between p-2 mb-3 rounded-xl  text-xs text-zinc-400 bg-zinc-900">
        <NavLink
          to={'/lib'}
          className={({ isActive }) => `${isActive ? activeButtonClasses : ''} ${buttonClasses}`}
          end
        >
          <KubokIcon />
          <span>Упражнения</span>
        </NavLink>
        <NavLink
          to={'/lib/templates'}
          className={({ isActive }) => `${isActive ? activeButtonClasses : ''} ${buttonClasses}`}
          end
        >
          <ListIcon />
          <span>Шаблоны</span>
        </NavLink>
        <NavLink
          to={'/lib/create-templates'}
          className={({ isActive }) => `${isActive ? activeButtonClasses : ''} ${buttonClasses}`}
          end
        >
          <CreateIcon />
          <span>Создать</span>
        </NavLink>
      </div>
    </div>
  )
}

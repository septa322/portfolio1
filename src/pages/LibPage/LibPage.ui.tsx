import { Outlet } from 'react-router'
import ToggleLibTabBar from '../../widgets/ToggleLibTabBar/ToggleLibTabBar.ui'

export function LibPage() {
  return (
    <div className="flex flex-col min-w-100 p-3">
      <header className="mb-3">
        <h1 className="text-2xl mb-1">Библиотека</h1>
        <p className="text-sm text-zinc-400">Упражнения</p>
      </header>
      <ToggleLibTabBar />
      <Outlet />
    </div>
  )
}

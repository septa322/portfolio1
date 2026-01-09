import { Outlet } from 'react-router'
import Navbar from '../widgets/Navbar/Navbar.ui'

function App() {
  return (
    <div className="min-h-dvh flex flex-col bg-black">
      <main className="flex-1 overflow-y-auto pb-24 flex justify-center w-full">
        <Outlet />
      </main>
      <Navbar />
    </div>
  )
}

export default App

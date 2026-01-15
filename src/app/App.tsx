import { Outlet } from 'react-router'
import Navbar from '../widgets/Navbar/Navbar.ui'
import { StoreProvider } from './providers/StoreProvider'

function App() {
  return (
    <StoreProvider>
      <div className="min-h-dvh flex flex-col bg-black">
        <main className="flex-1 overflow-y-auto pb-24 flex justify-center w-full">
          <Outlet />
        </main>
        <Navbar />
      </div>
    </StoreProvider>
  )
}

export default App

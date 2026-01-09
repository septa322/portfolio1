import Calendar from '../../entities/calendar/ui/Calendar.ui'
import { StoreProvider } from '../../app/providers/StoreProvider'

export default function HomePage() {
  return (
    <StoreProvider>
      <div className="flex flex-col p-3 min-w-100">
        <HomePageHeader />
        <Calendar />
      </div>
    </StoreProvider>
  )
}

function HomePageHeader() {
  return (
    <div>
      <h1 className="text-3xl">Дневник тренировок</h1>
      <h2 className="text-lg text-zinc-400">Отслеживайте свой прогресс</h2>
    </div>
  )
}

// app/provider/StoreProvider.tsx
import { Provider } from 'react-redux'
import { store } from '../store' // глобальный store, где подключен calendarSlice

export const StoreProvider = ({ children }: { children: React.ReactNode }) => (
  <Provider store={store}>{children}</Provider>
)

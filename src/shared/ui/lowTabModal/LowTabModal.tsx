import type { ReactNode } from 'react'

type LowTabModalProps = {
  children: ReactNode
  height?: number
}
export default function LowTabModal({ children, height = 70 }: LowTabModalProps) {
  return (
    <>
      <div className="fixed top-0 left-0 h-full w-full bg-black/50"></div>
      <div
        className={`flex justify-center fixed bottom-0 left-0 right-0 z-25 w-full h-${height} p-2 rounded-t-xl bg-zinc-800`}
      >
        <div className="flex flex-col min-w-100 p-3">{children}</div>
      </div>
    </>
  )
}

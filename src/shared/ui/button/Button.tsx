import type { MouseEventHandler, ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  color: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function Button({ children, color, onClick }: ButtonProps) {
  return (
    <button
      className={`w-full h-13 rounded-xl cursor-pointer bg-${color}-500 hover:bg-${color}-700`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

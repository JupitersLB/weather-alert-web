import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

export const JLBButton: FC<{
  className?: string
  disabled?: boolean
  onClick?: () => void
}> = observer(({ children, className, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center ring-0 rounded px-5 py-3 font-semibold ${className}`}
    >
      {children}
    </button>
  )
})

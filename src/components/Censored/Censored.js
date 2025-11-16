'use client'
import React from 'react'

function Censored ({ children }) {
  const [IsCensored, setIsCensored] = React.useState(false)

  return (
    <button
      className={IsCensored ? 'censored' : undefined}
      onClick={() => setIsCensored(!IsCensored)}
    >
      {children}
    </button>
  )
}

export default Censored

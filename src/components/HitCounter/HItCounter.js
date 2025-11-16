'use client'

import React from 'react'

export default function HitCounter ({ hits }) {
  const [show, setShow] = React.useState(true)
  return (
    <button
      className={show ? 'censored' : undefined}
      onClick={() => setShow(!show)}
    >
      {hits}
    </button>
  )
}

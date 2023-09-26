import { useState, useEffect } from 'react'

export default function Token() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNum(Math.floor(Math.random() * 100000))
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="p-[5em] border-solid border-laranja border-[5px] rounded-[100%]">{num}</h1>
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'

const LifeCycle = () => {
  const [text, setText] = useState('')
  const firstUpdate = useRef(true)

  useEffect(() => {
    console.log('Componente montado')

    return () => {
      console.log('Componente desmontado')
    }
  }, [])

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }

    console.log('Componente actualizado')
  }, [text])

  return (
    <div>
      <h2>LifeCycle</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe para actualizar"
      />
    </div>
  )
}

export default LifeCycle

import { useState } from 'react'

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8080').replace(/\/$/, '')

const useAuth = () => {
  const [token, setToken] = useState(() => localStorage.getItem('token') || '')
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const login = async ({ email, password }) => {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
    const data = await res.json()

    if (!res.ok) {
      throw new Error(data.message || 'No se pudo iniciar sesion')
    }

    localStorage.setItem('token', data.token)
    localStorage.setItem('user', JSON.stringify(data.user))
    setToken(data.token)
    setUser(data.user)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setToken('')
    setUser(null)
  }

  return {
    isLogin: Boolean(token),
    token,
    user,
    login,
    logout,
  }
}

export default useAuth

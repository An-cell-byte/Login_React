import { useCallback, useState } from 'react'

const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8080').replace(/\/$/, '')

const useAdmin = (token) => {
  const [users, setUsers] = useState([])

  const getAuthHeaders = useCallback(() => ({
    Authorization: `Bearer ${token}`,
  }), [token])

  const getUsers = useCallback(async () => {
    if (!token) return

    const res = await fetch(`${API_URL}/users`, { headers: getAuthHeaders() })
    if (!res.ok) {
      throw new Error('No se pudieron cargar los usuarios')
    }

    const data = await res.json()
    setUsers(Array.isArray(data) ? data : [])
  }, [getAuthHeaders, token])

  const getUser = useCallback(async (id) => {
    if (!token || !id) return null

    const res = await fetch(`${API_URL}/users/${id}`, { headers: getAuthHeaders() })
    if (!res.ok) return null
    return res.json()
  }, [getAuthHeaders, token])

  const delUser = async (id) => {
    const res = await fetch(`${API_URL}/users/${id}`, {
      method: 'DELETE',
      headers: getAuthHeaders(),
    })
    if (!res.ok) {
      throw new Error('No se pudo eliminar el usuario')
    }

    setUsers((currentUsers) => currentUsers.filter((user) => user._id !== id))
  }

  const addUser = async (newUser) => {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...getAuthHeaders(),
      },
      body: JSON.stringify(newUser),
    })
    if (!res.ok) {
      throw new Error('No se pudo agregar el usuario')
    }

    const data = await res.json()
    setUsers((currentUsers) => [...currentUsers, data])
    return data
  }

  return { users, getUsers, getUser, delUser, addUser }
}

export default useAdmin

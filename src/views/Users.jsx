import { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import CustomTextField from '../components/CustomTextField'

function Users() {
  const [users, setUsers] = useState([])
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const token = localStorage.getItem('token')

  const getUsers = async () => {
    const res = await fetch('http://localhost:5000/users', {
      headers: { Authorization: `Bearer ${token}` }
    })
    const data = await res.json()
    setUsers(data)
  }

  const addUser = async () => {
    await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ nombre, email, password })
    })

    setNombre('')
    setEmail('')
    setPassword('')
    getUsers()
  }

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    getUsers()
  }

  useEffect(() => {
    const cargarUsuarios = async () => {
      const res = await fetch('http://localhost:5000/users', {
        headers: { Authorization: `Bearer ${token}` }
      })
      const data = await res.json()
      setUsers(data)
    }

    cargarUsuarios()
  }, [token])

  return (
    <Box sx={{ p: 4, maxWidth: 700, margin: '0 auto' }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Usuarios</Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <CustomTextField label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <CustomTextField label="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
          <CustomTextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" onClick={addUser}>Agregar usuario</Button>
        </CardContent>
      </Card>

      {users.map((user) => (
        <Card key={user._id} sx={{ mb: 2 }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography fontWeight={700}>{user.nombre}</Typography>
              <Typography color="text.secondary">{user.email}</Typography>
            </Box>
            <Button color="error" variant="outlined" onClick={() => deleteUser(user._id)}>
              Eliminar
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default Users

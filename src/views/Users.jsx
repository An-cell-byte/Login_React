import { useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import CustomTextField from '../components/CustomTextField'

function Users({ users, addUser, delUser }) {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAddUser = async () => {
    await addUser({ nombre, email, password })
    setNombre('')
    setEmail('')
    setPassword('')
  }

  return (
    <Box sx={{ p: 4, maxWidth: 700, margin: '0 auto' }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Usuarios</Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <CustomTextField label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
          <CustomTextField label="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
          <CustomTextField label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" onClick={handleAddUser}>Agregar usuario</Button>
        </CardContent>
      </Card>

      {users.map((user) => (
        <Card key={user._id} sx={{ mb: 2 }}>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
            <Box>
              <Typography fontWeight={700}>{user.nombre}</Typography>
              <Typography color="text.secondary">{user.email}</Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Button component={Link} to={`/users/${user._id}`} variant="outlined">
                Ver detalle
              </Button>
              <Button color="error" variant="outlined" onClick={() => delUser(user._id)}>
                Eliminar
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default Users

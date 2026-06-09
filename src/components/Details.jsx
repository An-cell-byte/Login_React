import { useEffect, useState } from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { Link, useParams } from 'react-router-dom'

const Details = ({ users, getUser }) => {
  const { id } = useParams()
  const [fetchedUser, setFetchedUser] = useState(null)
  const listedUser = users.find((currentUser) => currentUser._id === id)
  const user = listedUser || fetchedUser

  useEffect(() => {
    if (listedUser) {
      return
    }

    const loadUser = async () => {
      const data = await getUser(id)
      setFetchedUser(data)
    }

    loadUser()
  }, [getUser, id, listedUser])

  if (!user) {
    return (
      <Box sx={{ p: 4, maxWidth: 500, margin: '0 auto' }}>
        <Typography>Cargando usuario...</Typography>
      </Box>
    )
  }

  return (
    <Box sx={{ p: 4, maxWidth: 500, margin: '0 auto' }}>
      <Card>
        <CardContent>
          <Typography variant="h5" sx={{ mb: 2 }}>Detalle del usuario</Typography>
          <Typography><strong>ID:</strong> {user._id}</Typography>
          <Typography><strong>Nombre:</strong> {user.nombre}</Typography>
          <Typography><strong>Correo:</strong> {user.email}</Typography>
          <Button component={Link} to="/users" variant="outlined" sx={{ mt: 3 }}>
            Volver a usuarios
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Details

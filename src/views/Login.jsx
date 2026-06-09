import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import CustomTextField from '../components/CustomTextField'
import LoginButton from '../components/LoginButton'

function Login({ onLogin }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    try {
      setLoading(true)
      await onLogin({ email, password })
    } catch (error) {
      alert(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box sx={{ p: 4, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Iniciar sesion</Typography>

      <CustomTextField
        label="Correo electronico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomTextField
        label="Contrasena"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <LoginButton onClick={handleLogin} disabled={loading} />
    </Box>
  )
}

export default Login

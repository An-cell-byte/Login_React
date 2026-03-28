import { Box, Typography } from '@mui/material'
import { useState } from 'react'
//import { useNavigate } from 'react-router-dom'
import CustomTextField from '../components/CustomTextField'
import LoginButton from '../components/LoginButton'

function Login({onLogin}) {
  //const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    onLogin()  
  }

  return (
    <Box sx={{ p: 4, maxWidth: 400, margin: '0 auto' }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Iniciar sesión</Typography>

      <CustomTextField
        label="Correo electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <CustomTextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <LoginButton onClick={handleLogin} />
    </Box>
  )
}

export default Login
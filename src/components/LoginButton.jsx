import { Button } from '@mui/material'

function LoginButton({ onClick, disabled = false }) {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      sx={{ mt: 1 }}
    >
      Iniciar sesión
    </Button>
  )
}

export default LoginButton
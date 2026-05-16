import {
  Box,
  Card,
  CardContent,
  Avatar,
  Stack,
  Typography,
  Divider,
  Chip
} from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

function Profile({ user }) {
  const name = user?.nombre || 'Usuario'
  const email = user?.email || 'Sin correo'
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .substring(0, 2)
    .toUpperCase()

  return (
    <Box sx={{ p: 4, maxWidth: 500, margin: '0 auto' }}>
      <Card elevation={3}>
        <CardContent sx={{ textAlign: 'center', p: 4 }}>

          <Stack direction="row" justifyContent="center">
            <Avatar
              sx={{
                bgcolor: deepPurple[500],
                width: 100,
                height: 100,
                fontSize: '2rem'
              }}
            >
              {initials}
            </Avatar>
          </Stack>

          <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>
            {name}
          </Typography>
          <Chip label="Usuario autenticado" color="primary" size="small" sx={{ mt: 1 }} />

          <Divider sx={{ my: 3 }} />

          <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 2 }}>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon color="action" />
              <Typography color="text.secondary">{email}</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonIcon color="action" />
              <Typography color="text.secondary">{user?._id}</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarMonthIcon color="action" />
              <Typography color="text.secondary">Sesion iniciada con token JWT</Typography>
            </Box>

          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Profile

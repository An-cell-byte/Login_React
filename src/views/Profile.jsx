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

const user = {
  name: 'John Doe',
  initials: 'JD',
  email: 'johndoe@email.com',
  username: '@johndoe',
  joinDate: 'Marzo 2024',
  role: 'Administrador',
}

function Profile() {
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
              {user.initials}
            </Avatar>
          </Stack>

          <Typography variant="h5" sx={{ mt: 2, fontWeight: 700 }}>
            {user.name}
          </Typography>
          <Chip label={user.role} color="primary" size="small" sx={{ mt: 1 }} />

          <Divider sx={{ my: 3 }} />

          <Box sx={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 2 }}>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon color="action" />
              <Typography color="text.secondary">{user.email}</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PersonIcon color="action" />
              <Typography color="text.secondary">{user.username}</Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarMonthIcon color="action" />
              <Typography color="text.secondary">Miembro desde {user.joinDate}</Typography>
            </Box>

          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Profile
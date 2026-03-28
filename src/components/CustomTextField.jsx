import { TextField } from '@mui/material'

function CustomTextField({ label, type = 'text', value, onChange }) {
  return (
    <TextField
      fullWidth
      label={label}
      type={type}
      value={value}
      onChange={onChange}
      variant="outlined"
      sx={{ mb: 2 }}
    />
  )
}

export default CustomTextField
import { Box, Card, CardContent, Typography, Divider, Button } from '@mui/material'
import { useState } from 'react'
import CustomTextField from '../components/CustomTextField'

const questions = [
  { id: 1, label: '¿Cuál es la capital de Francia?' },
  { id: 2, label: '¿Cuánto es 15 x 8?' },
  { id: 3, label: '¿En qué año llegó el hombre a la luna?' },
  { id: 4, label: '¿Cuál es el elemento químico del agua?' },
]

function Quiz() {
  const [answers, setAnswers] = useState({ 1: '', 2: '', 3: '', 4: '' })

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <Box sx={{ p: 4, maxWidth: 500, margin: '0 auto' }}>
      <Card elevation={3}>
        <CardContent sx={{ p: 4 }}>

          <Typography variant="h5" fontWeight={700} sx={{ mb: 1 }}>
            Quiz
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Responde las siguientes preguntas
          </Typography>

          <Divider sx={{ mb: 3 }} />

          {questions.map((q) => (
            <Box key={q.id} sx={{ mb: 1 }}>
              <Typography variant="body1" fontWeight={500} sx={{ mb: 1 }}>
                {q.id}. {q.label}
              </Typography>
              <CustomTextField
                label="Tu respuesta"
                value={answers[q.id]}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
            </Box>
          ))}

          <Button fullWidth variant="contained" sx={{ mt: 2 }}>
            Enviar respuestas
          </Button>

        </CardContent>
      </Card>
    </Box>
  )
}

export default Quiz
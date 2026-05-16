import { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Profile from './views/Profile'
import ResponsiveAppBar from './components/AppBar'
import Quiz from './views/Quiz'
import Users from './views/Users'

function App() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <BrowserRouter>
      {isLogin && <ResponsiveAppBar />}
      <Routes>
        <Route
          path="/"
          element={isLogin ? <Navigate to="/profile" /> : <Login onLogin={() => setIsLogin(true)} />}
        />
        <Route
          path="/profile"
          element={isLogin ? <Profile /> : <Navigate to="/" />}
        />
        <Route 
          path="/quiz" element={<Quiz />} 
        />
        <Route 
          path="/users" element={isLogin ? <Users /> : <Navigate to="/" />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App

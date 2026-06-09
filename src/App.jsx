import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Login from './views/Login'
import Profile from './views/Profile'
import ResponsiveAppBar from './components/AppBar'
import Quiz from './views/Quiz'
import Users from './views/Users'
import Details from './components/Details'
import LifeCycle from './components/LifeCycle'
import useAuth from './hooks/useAuth'
import useAdmin from './hooks/useAdmin'

function App() {
  const { isLogin, token, user, login, logout } = useAuth()
  const { getUsers, getUser, delUser, addUser, users } = useAdmin(token)
  const [showLifeCycle, setShowLifeCycle] = useState(false)

  useEffect(() => {
    if (isLogin) {
      getUsers().catch(() => {
        logout()
      })
    }
  }, [getUsers, isLogin, logout])

  return (
    <BrowserRouter>
      {isLogin && <ResponsiveAppBar logout={logout} />}

      <Routes>
        <Route
          path="/"
          element={isLogin ? <Navigate to="/profile" /> : <Login onLogin={login} />}
        />
        <Route
          path="/profile"
          element={isLogin ? <Profile user={user} /> : <Navigate to="/" />}
        />
        <Route
          path="/quiz"
          element={isLogin ? <Quiz /> : <Navigate to="/" />}
        />
        <Route
          path="/users"
          element={isLogin ? <Users users={users} addUser={addUser} delUser={delUser} /> : <Navigate to="/" />}
        />
        <Route
          path="/users/:id"
          element={isLogin ? <Details users={users} getUser={getUser} /> : <Navigate to="/" />}
        />
      </Routes>

      {isLogin && (
        <div className="lifecycle-demo">
          <button onClick={() => setShowLifeCycle(!showLifeCycle)}>
            {showLifeCycle ? 'Ocultar' : 'Mostrar'} ciclo de vida
          </button>
          {showLifeCycle && <LifeCycle />}
        </div>
      )}
    </BrowserRouter>
  )
}

export default App

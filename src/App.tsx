import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import AdminDashboard from './Components/AdminDashboard/AdminDashboard'
import Register from './Components/Register/Register'
import User from './Components/User/User'
import ForgotPassword from './Components/ForgetPassword/ForgotPassword'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <div className="app-container">
      <main>
        <Routes>
          <Route path="/tryon-hairsty/login" element={<Login />} />
          <Route path="/tryon-hairsty/register" element={<Register />} />
          <Route path="/tryon-hairsty/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/tryon-hairsty/admin-dashboard/*"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/tryon-hairsty/user/*" element={<User />} />
          <Route path="/tryon-hairsty" element={<Navigate to="/tryon-hairsty/user" replace />} />
          <Route path="/" element={<Navigate to="/tryon-hairsty/user" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

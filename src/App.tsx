import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import AdminDashboard from './Components/AdminDashboard/AdminDashboard'
import Register from './Components/Register/Register'
import User from './Components/User/User'
import ForgotPassword from './Components/ForgetPassword/ForgotPassword'
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute'

function App() {
  return (
    <BrowserRouter basename="/tryon-hairsty">
      <div className="app-container">
        <main>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route
              path="/admin-dashboard/*"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/user/*" element={<User />} />
            <Route path="/" element={<Navigate to="/user/home" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

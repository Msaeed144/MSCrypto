import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navigate to="/homepage"/>}/>
        <Route path='/homepage' element={<HomePage />}/>
      </Routes>
  )
}

export default App

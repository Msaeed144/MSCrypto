import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Favorite from './pages/Favorite'
import PageNotFound from './pages/404'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Navigate to="/homepage"/>}/>
        <Route path='/homepage' element={<HomePage />}/>
        <Route path='/favorite' element={<Favorite />}/>
        <Route path='/*' element={<PageNotFound />}/>
      </Routes>
  )
}

export default App

import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Favorite from './pages/Favorite'
import PageNotFound from './pages/404'
import CryptoProvider from './context/CryptoContext'

function App() {
  return (
    <CryptoProvider>
      <Routes>
        <Route path='/' element={<Navigate to="/homepage"/>}/>
        <Route path='/homepage' element={<HomePage />}/>
        <Route path='/favorite' element={<Favorite />}/>
        <Route path='/*' element={<PageNotFound />}/>
      </Routes>
    </CryptoProvider>
  )
}

export default App

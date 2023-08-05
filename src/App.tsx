import { Outlet, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import VideoDashboard from './pages/videoDashboard'
import VideoView from './pages/videoDashboard/videoView'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Outlet />}>
        <Route index element={<VideoDashboard />} />
        <Route path=':videoID' element={<VideoView />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />

        {/* <Route element={<Protected />}>
          <Route path='register' element={<RegisterPage />} />
        </Route> */}
      </Route>
    </Routes>
  )
}

export default App

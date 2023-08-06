import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PageLayout from './components/Layouts/PageLayout';
import VideoProfile from './pages/profiles/VideoProfile';
import VideoDashboard from './pages/videoDashboard/VideoDashboard';

function App() {
	return (
		<PageLayout>
			<Header />
			<Routes>
				<Route path='/' element={<Outlet />}>
					<Route index element={<VideoDashboard />} />
					<Route path=':videoID' element={<VideoProfile />} />

					{/* <Route element={<Protected />}>
          <Route path='register' element={<RegisterPage />} />
        </Route> */}
				</Route>
			</Routes>
		</PageLayout>
	);
}

export default App;

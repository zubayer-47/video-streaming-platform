import { Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import PageLayout from './components/Layouts/PageLayout';
import useAuth from './hooks/useAuth';
import useModal from './hooks/useModal';
import AuthModal from './pages/authModals/AuthModal';
import ChannelProfile from './pages/profiles/channel/ChannelProfile';
import About from './pages/profiles/channel/about/About';
import Featured from './pages/profiles/channel/featured/Featured';
import Playlists from './pages/profiles/channel/playlists/Playlists';
import UploadVideo from './pages/profiles/channel/upload/UploadVideo';
import Video from './pages/profiles/channel/videos/Videos';
import VideoProfile from './pages/profiles/video/VideoProfile';
import VideoDashboard from './pages/videoDashboard/VideoDashboard';

function App() {
	const userContext = useAuth()
	const modalContext = useModal()
	return (
		<PageLayout>
			<Header />
			{!userContext.state.isLoggedIn && modalContext.state.isVisibleAuthModal ? <AuthModal /> : null}
			<Routes>
				<Route path='/' element={<Outlet />}>
					<Route index element={<VideoDashboard />} />
					<Route path='watch/:videoID' element={<VideoProfile />} />
					<Route path=':channelName' element={<ChannelProfile />} >
						<Route index element={<Featured />} />
						<Route path='featured' element={<Featured />} />
						<Route path='videos' element={<Video />} />
						<Route path='playlists' element={<Playlists />} />
						{/* <Route path='channels' element={<Channels />} /> */}
						<Route path='about' element={<About />} />
					</Route>
					<Route path='upload' element={<UploadVideo />} />

					{/* <Route element={<Protected />}>
          <Route path='register' element={<RegisterPage />} />
        </Route> */}
				</Route>
			</Routes>
		</PageLayout>
	);
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import ErrorBoundary from './components/errors/ErrorBoundary.tsx';
import ModalProvider from './contexts/modal/Provider.tsx';
import UserProvider from './contexts/user/Provider.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ErrorBoundary>
			<HashRouter>
				<UserProvider>
					<ModalProvider>
						<App />
					</ModalProvider>
				</UserProvider>
			</HashRouter>
		</ErrorBoundary>
	</React.StrictMode>
);

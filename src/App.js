import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Signin from './pages/Authentication/Signin';
import Signup from './pages/Authentication/Signup';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Breadcrmb from './components/breadcrumbs/Breadcrmb';
function App() {
	return (
		<>
			<Navbar />
			
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
			
		</>
	);
}

export default App;

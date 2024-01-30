import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import Oops from './pages/Oops';
import './App.css';
import Confirmation from './pages/Confirmation';

function App() {
	return (
		<BrowserRouter>
			<div className='grid'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route
						path='/reservations'
						element={<Reservations />}></Route>
					<Route path='/oops' element={<Oops />}></Route>
					<Route
						path='/confirmation'
						element={<Confirmation />}></Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;

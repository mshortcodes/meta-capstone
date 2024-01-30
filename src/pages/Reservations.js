import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Form from '../components/Form';
import Line from '../components/Line';
import Footer from '../components/Footer';
import { useReducer } from 'react';

const updateTimes = (state) => {
	return state;
};

function Reservations() {
	const initializeTimes = () => {
		return ['5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30'];
	};

	const availableTimesReducer = (state, action) => {
		switch (action.type) {
			case 'INITIALIZE_TIMES':
				return initializeTimes();
			case 'UPDATE_TIMES':
				const newDate = action.date;
				return updateTimes(state, newDate);
			default:
				return state;
		}
	};

	const [availableTimes, dispatch] = useReducer(
		availableTimesReducer,
		[],
		initializeTimes
	);

	const handleUpdateTimes = (newDate) => {
		dispatch({ type: 'UPDATE_TIMES', date: newDate });
	};

	return (
		<>
			<Logo />
			<Nav />
			<Banner />
			<Form
				availableTimes={availableTimes}
				setAvailableTimes={(newDate) => handleUpdateTimes(newDate)}
			/>
			<Line />
			<Footer />
		</>
	);
}

export default Reservations;

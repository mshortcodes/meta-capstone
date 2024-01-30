import '../styles/Confirm.css';

const reservationID = Math.floor(Math.random() * 9000) + 1000;

function Confirm() {
	return (
		<div className='confirm'>
			<h1>
				Thank you! Your seats have been reserved. Your reservation ID is
				#{`${reservationID}`}.
			</h1>
		</div>
	);
}

export default Confirm;

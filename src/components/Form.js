import '../styles/Form.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Form(props) {
	const [name, setName] = useState();
	const [email, setEmail] = useState('');
	const [date, setDate] = useState();
	const [time, setTime] = useState();
	const [partySize, setPartySize] = useState();
	const [seating, setSeating] = useState();
	const [occasion, setOccasion] = useState();
	const [comments, setComments] = useState();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const isDateValid = (selectedDate) => {
		const currentDate = new Date();
		const reservationDate = new Date(selectedDate);

		return reservationDate > currentDate;
	};

	const isEmailValid = email.includes('@');

	const isFormValid = () => {
		const isDateInFuture = isDateValid(date);
		return name && email && isDateInFuture && isEmailValid;
	};

	return (
		<main className='main'>
			<h1 id='reservations'>Reserve a Table</h1>
			<form className='form' onSubmit={handleSubmit}>
				<div className='name'>
					<label htmlFor='name'>
						Name <sup>*</sup>
					</label>
					<input
						type='text'
						id='name'
						value={name}
						required
						aria-label='name'
						onChange={(e) => {
							setName(e.target.value);
						}}></input>
				</div>
				<div className='email'>
					<label htmlFor='email'>
						Email <sup>*</sup>
					</label>
					<input
						type='email'
						id='email'
						value={email}
						required
						aria-label='email'
						onChange={(e) => {
							setEmail(e.target.value);
						}}></input>
					{email && !isEmailValid && (
						<div className='error-message'>
							Please enter a valid email.
						</div>
					)}
				</div>
				<div className='date'>
					<label htmlFor='date'>
						Date <sup>*</sup>
					</label>
					<br />
					<input
						type='date'
						id='date'
						value={date}
						required
						aria-label='date'
						onChange={(e) => {
							setDate(e.target.value);
							props.setAvailableTimes(e.target.value);
						}}
					/>
					{date && !isDateValid(date) && (
						<div className='error-message'>
							Please select a valid date.
						</div>
					)}
				</div>

				<div className='time'>
					<label htmlFor='time'>
						Time <sup>*</sup>
					</label>
					<br />
					<select
						id='time'
						value={time}
						aria-label='time'
						onChange={(e) => {
							setTime(e.target.value);
						}}>
						{props.availableTimes.map((time) => (
							<option value={time}>{time}</option>
						))}
					</select>
				</div>

				<div className='party'>
					<label htmlFor='size'>
						Party Size <sup>*</sup>
					</label>
					<br />
					<input
						type='number'
						id='size'
						aria-label='party size'
						placeholder='1'
						min='1'
						max='10'
						value={partySize}
						onChange={(e) => {
							setPartySize(e.target.value);
						}}></input>
				</div>

				<div className='seating'>
					<label htmlFor='indoor'>Indoor</label>
					<input
						type='radio'
						id='indoor'
						name='seating'
						aria-label='indoor seating'
						value='indoor'
						checked={seating === 'indoor'}
						onChange={() => setSeating('indoor')}
					/>
					<label htmlFor='outdoor'>Outdoor</label>
					<input
						type='radio'
						id='outdoor'
						name='seating'
						value='outdoor'
						aria-label='outdoor seating'
						checked={seating === 'outdoor'}
						onChange={() => setSeating('outdoor')}
					/>
				</div>

				<div className='occasion'>
					<label htmlFor='occasion'>Occasion</label>
					<br />
					<select
						id='occasion'
						aria-label='occasion'
						value={occasion}
						onChange={(e) => {
							setOccasion(e.target.value);
						}}>
						<option>Birthday</option>
						<option>Holiday</option>
						<option>Wedding</option>
						<option>Engagement</option>
						<option>Anniversary</option>
						<option>Other</option>
					</select>
				</div>

				<div className='comments'>
					<label htmlFor='comments'>Comments</label>
					<br />
					<textarea
						id='comments'
						aria-label='comments'
						cols='25'
						rows='5'
						placeholder='Have a special request?'
						value={comments}
						onChange={(e) =>
							setComments(e.target.value)
						}></textarea>
				</div>

				<div className='reserve-table'>
					<Link to='/confirmation'>
						<button
							className='button'
							type='submit'
							aria-label='reserve a table'
							disabled={!isFormValid()}>
							Reserve a Table
						</button>
					</Link>
				</div>
			</form>
		</main>
	);
}

export default Form;

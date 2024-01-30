import '../styles/Specials.css';
import { Link } from 'react-router-dom';
import salad from '../images/greek-salad.jpg';
import bruschetta from '../images/bruschetta.svg';
import dessert from '../images/lemon-dessert.jpg';

function Specials() {
	return (
		<div className='specials'>
			<div className='specials-header'>
				<h2>This Week's Specials!</h2>
			</div>

			<div className='specials-button'>
				<Link to='/oops'>
					<button id='specials-button'>Online Menu</button>
				</Link>
			</div>

			<div className='specials-card1'>
				<img src={salad} alt='Greek salad' id='specials-salad' />
				<h2 id='salad'>Greek Salad</h2>
				<h2 className='price' id='salad-price'>
					$12.99
				</h2>
				<p>
					The famous Greek salad of crispy lettuce, peppers, olives,
					and our Chicago-style feta cheese, garnished with crunchy
					garlic and rosemary croutons.
				</p>
			</div>

			<div className='specials-card2'>
				<img
					src={bruschetta}
					alt='Bruschetta'
					id='specials-bruschetta'
				/>
				<h2 id='bruschetta'>Bruschetta</h2>
				<h2 className='price' id='bruschetta-price'>
					$5.99
				</h2>
				<p>
					Our Bruschetta is made from grilled bread that has been
					smeared with garlic and seasoned with salt and olive oil.
				</p>
			</div>

			<div className='specials-card3'>
				<img src={dessert} alt='Lemon dessert' id='specials-dessert' />
				<h2 id='dessert'>Lemon Cake</h2>
				<h2 className='price' id='dessert-price'>
					$5.00
				</h2>
				<p>
					This comes straight from grandma's recipe book. Every last
					ingredient has been sourced and is authentic as can be
					imagined.
				</p>
			</div>
		</div>
	);
}

export default Specials;

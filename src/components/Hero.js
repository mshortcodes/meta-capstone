import '../styles/Hero.css';
import { Link } from 'react-router-dom';
import chef from '../images/chef.jpg';

function Hero() {
	return (
		<div className='hero'>
			<div className='hero-about'>
				<h1>Little Lemon</h1>
				<h2>Chicago</h2>
				<p>
					We are a family-owned, Mediterranean restaurant focused on
					traditional recipes served with a modern twist.
				</p>
				<Link to='/reservations'>
					<button className='hero-button'>Reserve a Table</button>
				</Link>
			</div>
			<div className='chef'>
				<img src={chef} alt='Little Lemon chef' id='chef' />
			</div>
		</div>
	);
}

export default Hero;

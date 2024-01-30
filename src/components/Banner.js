import '../styles/Banner.css';
import restaurant from '../images/restaurant.jpg';

function Banner() {
	return (
		<div className='banner'>
			<img src={restaurant} alt='restaurant banner' id='restaurant' />
		</div>
	);
}

export default Banner;

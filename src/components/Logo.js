import { Link } from 'react-router-dom';
import '../styles/Logo.css';
import logo from '../images/logo.svg';

function Logo() {
	return (
		<header className='logo'>
			<Link to='/'>
				<img src={logo} alt='Little Lemon Logo' />
			</Link>
		</header>
	);
}

export default Logo;

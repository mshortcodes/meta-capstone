import { useState } from 'react';
import hamburger from '../images/hamburger.svg';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
	const [isMobile, setIsMobile] = useState(false);
	const location = useLocation();

	const toggleMobileMenu = () => {
		setIsMobile(!isMobile);
	};

	return (
		<nav className='nav'>
			<div className='hamburger' onClick={toggleMobileMenu}>
				<img src={hamburger} alt='menu' id='hamburger' />
			</div>
			<ul className={isMobile ? 'show' : ''}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				{location.pathname === '/' && (
					<li>
						<a href='#about'>About</a>
					</li>
				)}
				<li>
					<Link to='/oops'>Menu</Link>
				</li>
				<li>
					<Link to='/reservations'>Reservations</Link>
				</li>
				<li>
					<Link to='/oops'>Order Online</Link>
				</li>
				<li>
					<Link to='/oops'>Login</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;

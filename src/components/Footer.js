import '../styles/Footer.css';
import { Link, useLocation } from 'react-router-dom';
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import x from '../images/x.png';
import footerlogo from '../images/footerlogo.png';

function Footer() {
	const location = useLocation();

	return (
		<footer className='footer'>
			<Link to='/'>
				<img
					className='footer-img'
					src={footerlogo}
					alt='Little Lemon Logo'
				/>
			</Link>
			<div className='footer-nav'>
				<h2>Navigation</h2>
				<nav>
					<ul>
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
			</div>

			<div className='contact'>
				<h2>Contact</h2>
				<p>
					220 N Green St
					<br /> Chicago, IL 60607
					<br /> (312) 555-5555
					<br /> contact@littlelemon.biz
				</p>
			</div>

			<div className='social'>
				<h2>Social Media</h2>
				<a
					href='https://www.facebook.com/'
					target='_blank'
					rel='noreferrer'>
					<img src={facebook} alt='Facebook logo' />
				</a>
				<a
					href='https://www.instagram.com/'
					target='_blank'
					rel='noreferrer'>
					<img src={instagram} alt='Instagram logo' />
				</a>
				<a
					href='https://twitter.com/?lang=en'
					target='_blank'
					rel='noreferrer'>
					<img src={x} alt='X logo' />
				</a>
			</div>
		</footer>
	);
}

export default Footer;

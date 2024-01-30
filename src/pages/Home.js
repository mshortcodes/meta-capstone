import Logo from '../components/Logo';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import Reviews from '../components/Reviews';
import About from '../components/About';
import Line from '../components/Line';
import Footer from '../components/Footer';

function Home() {
	return (
		<>
			<Logo />
			<Nav />
			<Hero />
			<Specials />
			<Reviews />
			<About />
			<Line />
			<Footer />
		</>
	);
}

export default Home;

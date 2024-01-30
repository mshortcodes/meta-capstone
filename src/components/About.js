import '../styles/About.css';
import mario from '../images/mario-adrian.jpg';
import server from '../images/server.jpg';

function About() {
	return (
		<div className='about' id='about'>
			<div className='about-little-lemon'>
				<h2>Little Lemon</h2>
				<h2>Chicago</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Duis euismod, quam vitae efficitur dignissim, arcu diam
					hendrerit neque, id molestie justo leo id felis. Proin
					dapibus urna nec turpis convallis vehicula. Suspendisse eros
					risus, molestie vel consectetur aliquet, efficitur in velit.
					Phasellus ut lorem sit amet tellus hendrerit sollicitudin
					nec ut odio. Nunc nec neque accumsan, efficitur mi ac,
					auctor dolor. Nullam convallis nisi id consectetur ornare.
					Sed dictum at lorem at interdum.
				</p>
			</div>
			<div className='about-images'>
				<img src={mario} alt='Mario and Adrian' id='about-mario' />
				<img src={server} alt='server' id='about-server' />
			</div>
		</div>
	);
}

export default About;

import '../styles/Reviews.css';
import review1 from '../images/review1.jpg';
import review2 from '../images/review2.jpg';
import review3 from '../images/review3.jpg';
import review4 from '../images/review4.jpg';
import stars from '../images/stars.svg';

function Reviews() {
	return (
		<div className='reviews-banner'>
			<h2 id='reviews-header'>Reviews</h2>
			<div className='reviews-cards'>
				<div className='reviews-card1'>
					<img
						src={review1}
						alt='review 1'
						className='reviews-images'
					/>
					<img
						src={stars}
						alt='five stars'
						className='reviews-stars'
					/>
					<p className='reviews-names'>John L.</p>
					<p className='reviews'>
						Excellent customer service and delicious lemon cake.
					</p>
				</div>
				<div className='reviews-card2'>
					<img
						src={review2}
						alt='review 2'
						className='reviews-images'
					/>
					<img
						src={stars}
						alt='five stars'
						className='reviews-stars'
					/>
					<p className='reviews-names'>Sarah M.</p>
					<p className='reviews'>Very fresh and tasty Greek salad!</p>
				</div>
				<div className='reviews-card3'>
					<img
						src={review3}
						alt='review 3'
						className='reviews-images'
					/>
					<img
						src={stars}
						alt='five stars'
						className='reviews-stars'
					/>
					<p className='reviews-names'>Sana R.</p>
					<p className='reviews'>
						Fantastic restaurant all-around and convenient online
						reservation system.
					</p>
				</div>
				<div className='reviews-card4'>
					<img
						src={review4}
						alt='review 4'
						className='reviews-images'
					/>
					<img
						src={stars}
						alt='five stars'
						className='reviews-stars'
					/>
					<p className='reviews-names'>Tom W.</p>
					<p className='reviews'>
						The bruschetta was the best I've had and the lemon cake
						was not overly sweet.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Reviews;

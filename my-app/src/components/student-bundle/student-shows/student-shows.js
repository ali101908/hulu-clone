import React from 'react'
import list3 from '../../../images/list3.jpeg';
import ss1 from '../student-images/ss1.jpeg'
import ss2 from '../student-images/ss2.webp'
import ss4 from '../student-images/ss4.webp'
import styles from '../../../assets/component.module.css/component.module.css';

const StudentShows = () => {
  return (
	<div className={styles.paddingCover} style={{ backgroundColor: '#0B0C0F' }}>
	<div className='show-title'>
	  <div className='show-header'>
		<h6 className={`${styles.themeColor} ${styles.textCenter}`}>INCLUDED IN HULU STUDENT DEAL</h6>
		<h1 className={styles.textCenter} style={{ color: 'white' }}>Unlimited Access To The Hulu Streaming Library</h1>
		<p className={styles.textCenter} style={{ color: 'white' }}>
		Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu Originals, 
		and more.
		</p>
	  </div>
	</div>
	<div className='shows'>
	  <div className={`${styles.flexWrap}`}>
		<div className={`${styles.flexWrap} ${styles.gap}` }>
		  <div className='show-item'>
			<img src={ss1} alt='Hulu Shows' width={280} height={440} />
			<div className='show-overlay'>
			  <h3 className='past'>Past Current Seasons</h3>
			  <h2>TV Shows</h2>
			</div>
		  {/* </div> */}
		  <div className='show-item'>
			<img src={ss2} alt='Hulu Shows' width={280} height={440} />
			<div className='show-overlay'>
			  <h3>New & Classic</h3>
			  <h2>Movies</h2>
			  <h3>TRAPPED IN THE ROCKY <br /> MOUNTAINS</h3>
			</div>
		  </div>
		</div>
		{/* <div className='show-row'> */}
		  <div className='show-item'>
			<img src={list3} alt='Hulu Shows' width={280} height={440} />
			<div className='show-overlay'>
			  <h3>Groundbreaking</h3>
			  <h2>Hulu Originals</h2>
			</div>
		  </div>
		  <div className='show-item'>
			<img src={ss4} alt='Hulu Shows' width={280} height={440} />
			<div className='show-overlay'>
			  <h3>NEWLY ADDED</h3>
			  <h2>Shows & Movies</h2>
			  <h3>THE MASKED SINGER</h3>
			</div>
		  </div>
		</div>
	  </div>
	</div>
	<p className={styles.textCenter} style={{ color: 'gray' }}>Premium network add-ons available for an additional cost</p>
	{/* <Trial /> */}
  </div>
  )
}

export default StudentShows

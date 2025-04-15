import React from 'react'
import m1 from '../../../images/bundle-images/m1.webp'
import m2 from '../../../images/bundle-images/m2.webp'
import m3 from '../../../images/bundle-images/m3.webp'
import m4 from '../../../images/bundle-images/m4.webp'
import m5 from '../../../images/bundle-images/m5.webp'
import m6 from '../../../images/bundle-images/m6.webp'
import m7 from '../../../images/bundle-images/m7.webp'
import m8 from '../../../images/bundle-images/m8.webp'
import m9 from '../../../images/bundle-images/m9.webp'
import m10 from '../../../images/bundle-images/m10.webp'
import m11 from '../../../images/bundle-images/m11.webp'
import m12 from '../../../images/bundle-images/m12.webp'
import styles from '../../../assets/component.module.css/component.module.css';
import { Row,Col } from 'antd'

const MaxMovies = () => {
  return (
	<div className={styles.widthAuto}>
		  <div className={`${styles.textCenter} ${styles.paddingComplete} movies-portion`}>
			<div className='movies-portion-a'>
				<h1>Tons of shows and movies with Hulu</h1>
				<Row justify="center">
				<Col span={10}>
				<p className={`${styles.fontWhite14px} ${styles.textCenter} box-content`}>Get access to Hulu with thousands of episodes of every kind of TV. From Shōgun to Only  Murders in The Building to The Kardashians – there’s plenty of all the things you’re into.</p>
				</Col>
				</Row>
				<div className={`${styles.flexWrap} ${styles.gap} portion-a-movies`}>
	<img src={m1} alt='img1' />
	<img src={m2} alt='img1' />
	<img src={m3} alt='img1' />
	<img src={m4} alt='img1' />
	<img src={m5} alt='img1' />
	<img src={m6} alt='img1' />
				</div>
			</div>
			<div className='movies-portion-a'>
				<h1>Disney+ has your favorite stories</h1>
				<Row justify="center">
				<Col span={10}>
				<p className={`${styles.fontWhite14px} ${styles.textCenter} box-content`}>Stream the best of Disney, Pixar, Marvel, Star Wars, National Geographic, and more. From  new releases and exclusive originals to your favorite blockbusters and classics, all of these  and more are now streaming on Disney+.</p>
				<p className={`${styles.fontGray} ${styles.textCenter}`}>
				© 2025 Disney and its related entities
				</p>
				</Col>
				</Row>
				<div className={`${styles.flexWrap} ${styles.gap} portion-a-movies`}>
	<img src={m7} alt='img1' />
	<img src={m8} alt='img1' />
	<img src={m9} alt='img1' />
	<img src={m10} alt='img1' />
	<img src={m11} alt='img1' />
	<img src={m12} alt='img1' />
				</div>
			</div>
		  </div>
		</div>
  )
}

export default MaxMovies
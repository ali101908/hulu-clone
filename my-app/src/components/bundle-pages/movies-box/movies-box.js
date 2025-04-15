import React from 'react'
import './movies.css'
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
import m13 from '../../../images/bundle-images/m13.png'
import m14 from '../../../images/bundle-images/m14.png'
import m15 from '../../../images/bundle-images/m15.png'
import m16 from '../../../images/bundle-images/m16.jpeg'
import m17 from '../../../images/bundle-images/m17.jpeg'
import m18 from '../../../images/bundle-images/m18.png'
import styles from '../../../assets/component.module.css/component.module.css';
import { Flex,Col,Row } from 'antd';

const MoviesBox = () => {
  return (
	<div className={styles.widthAuto}>
	  <div className={`${styles.textCenter} ${styles.paddingComplete} movies-portion`}>
		<div className='movies-portion-a'>
			<h1>Tons of shows and movies with Hulu</h1>
			<Row justify='center'>
<Col xs={24} sm={16} md={10}>
			<p className={`${styles.fontWhite14px}  box-content`}>Get access to Hulu with thousands of episodes of every kind of TV. From Shōgun to Only  Murders in The Building to The Kardashians – there’s plenty of all the things you’re into.</p>
			</Col>
			</Row>
			<div className= 'portion-a-movies'>
			 <Flex wrap="wrap" justify="center" gap="small">
<img src={m1} alt='img1' />
<img src={m2} alt='img1' />
<img src={m3} alt='img1' />
<img src={m4} alt='img1' />
<img src={m5} alt='img1' />
<img src={m6} alt='img1' />
</Flex>
			</div>
		</div>
		<div className='movies-portion-a'>
			<h1>Disney+ has your favorite stories</h1>
			<Row justify='center'>
<Col xs={24} sm={16} md={10}>
			<p className={`${styles.fontWhite14px} ${styles.textCenter} box-content`}>Stream the best of Disney, Pixar, Marvel, Star Wars, National Geographic, and more. From  new releases and exclusive originals to your favorite blockbusters and classics, all of these and more are now streaming on Disney+.</p>
			<p className={`${styles.fontGray} ${styles.textCenter}`}>
			© 2025 Disney and its related entities
			</p>
</Col>
</Row>
			<div className= 'portion-a-movies'>
			 <Flex wrap="wrap" justify="center" gap="small">
<img src={m7} alt='img1' />
<img src={m8} alt='img1' />
<img src={m9} alt='img1' />
<img src={m10} alt='img1' />
<img src={m11} alt='img1' />
<img src={m12} alt='img1' />
</Flex>
			</div>
		</div>
		<div className='movies-portion-a'>
			<h1>Live sports with ESPN+</h1>
			<Row justify='center'>
<Col xs={24} sm={16} md={10}>
			<p className={`${styles.fontWhite14px} ${styles.textCenter} box-content`}>Stream thousands of live events from top leagues including the NFL, NHL, MLB, UFC, LALIGA, and more.** Plus, follow the best stories in sports with the complete 30 for 30  library, exclusive originals and premium articles.</p>
			<p className={`${styles.fontGray} ${styles.textCenter}`} >
			**Blackouts and restrictions apply.
			</p>
			</Col>
			</Row>
			<div className= 'portion-a-movies'>
			 <Flex wrap="wrap" justify="center" gap="small">
<img src={m13} alt='img1' />
<img src={m14} alt='img1' />
<img src={m15} alt='img1' />
<img src={m16} alt='img1' />
<img src={m17} alt='img1' />
<img src={m18} alt='img1' />
</Flex>
			</div>
		</div>
	  </div>
	</div>
  )
}

export default MoviesBox
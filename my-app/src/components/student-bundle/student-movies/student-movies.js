import React from 'react'
import sm1 from '../student-images/sm1.webp'
import sm2 from '../student-images/sm2.webp'
import sm3 from '../student-images/sm3.webp'
import sm4 from '../student-images/sm4.webp'
import sm5 from '../student-images/sm5.webp'
import m2 from '../../../images/bundle-images/m2.webp'

const StudentMovies = () => {
  return (
<div className='movies-container'>
	  <div className='movies-portion'>
		<div className='movies-portion-a'>
			<h1>Tons of shows and movies with Hulu</h1>
			<p className='box-content'>Get access to Hulu with thousands of episodes of every kind of TV. From Shōgun to Only <br /> Murders in The Building to The Kardashians – there’s plenty of all the things you’re into.</p>
			<div className='portion-a-movies'>
<img src={sm1} alt='img1' />
<img src={sm2} alt='img1' />
<img src={sm3} alt='img1' />
<img src={sm4} alt='img1' />
<img src={sm5} alt='img1' />
<img src={m2} alt='img1' />
			</div>
		</div>
	  </div>
	</div>
  )
}

export default StudentMovies

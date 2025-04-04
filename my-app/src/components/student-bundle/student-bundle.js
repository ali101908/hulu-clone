import React from 'react'
import Footer from '../home/footer/footer'
import Faq from '../bundle-pages/frequently-asked-questions/faq'
import StudentHead from './student-head/student-head'
import StudentMovies from './student-movies/student-movies'
import StudentShows from './student-shows/student-shows'
import StudentSign from './student-signup/student-sign'
import StudentParty from './student-party/student-party'

const StudentBundle = () => {
  return (
	<div>
	<StudentHead />
	<StudentMovies />
	<StudentShows />
	<StudentSign />
	<StudentParty />
	<Faq />
	  <Footer />
	</div>
  )
}

export default StudentBundle

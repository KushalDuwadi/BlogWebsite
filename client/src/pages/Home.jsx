import React from 'react'
import {Navbar} from '../components/Navbar/Navbar'
import {Header} from '../components/Header/Header'
import BlogList from '../components/BlogList/BlogList'
import Newsletter from '../components/Newsletter/Newsletter'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Header/>
      <BlogList/>
      <Newsletter/>
      <Footer/>
      
    </>
  )
}

export default Home
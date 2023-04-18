import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Books from '../components/Books'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Slider />
        <Categories />
        <Books/>
        <Footer/>
    </>
  )
}

export default Home
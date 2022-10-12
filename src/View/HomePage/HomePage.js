import React from 'react'
import Header from '../../Container/Header/Header'
import Banner from '../../Container/Banner/Banner'
import Footer from '../../Container/Footer/Footer'
import WhyUs from '../Components/WhyUs/WhyUs'
import Products from '../Components/Products/Products'
import MostPopProduct from '../Components/Products/MostPopProduct'
import '../../assets/Css/main.css'

function HomePage() {
  return (
    <main>
        <Header />
        <Banner />
        <WhyUs />
        <Products />
        <MostPopProduct />
        <Footer />
    </main>
  )
}

export default HomePage
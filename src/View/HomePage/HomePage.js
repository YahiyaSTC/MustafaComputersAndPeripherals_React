import React from 'react'
import Banner from '../../Container/Banner/Banner'
import Header from '../../Container/Header/Header'
import WhyUs from '../Components/WhyUs/WhyUs'
import '../../assets/Css/main.css'

function HomePage() {
  return (
    <main>
        <Header />
        <Banner />
        <WhyUs   />
    </main>
  )
}

export default HomePage
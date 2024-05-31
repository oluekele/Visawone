import React from 'react'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Destination from '@/components/home/Destination'
import Features from '@/components/home/Features'
import Customer from '@/components/home/Customer'
import Journey from '@/components/home/Journey'


const Home = () => {
  return (
    <div>
      <Header />
      <Destination />
      <Features />
      <Customer />
      <Journey />
      <Footer />
        
    </div>
  )
}

export default Home
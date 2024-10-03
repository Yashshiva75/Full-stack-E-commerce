import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import mycontext from '../../contexts/MyContext'
import HeroSection from '../../components/herosection/herosection/Herosection'
import Filter from '../../components/filter/Filter'
import ProductsCard from '../../components/productscard/ProductsCard'
import Track from '../../components/track/Track'
import Testimonial from '../../components/testimonials/Testimonial'
import Footer from '../../components/footers/Footer'

export default function Home() {
    
    
  return (
    <div>
      <Layout>
        <HeroSection/>
        <Filter/>
        <ProductsCard/>
        <Track/>
        <Testimonial/>
        <Footer/>
      </Layout>
    </div>
  )
}

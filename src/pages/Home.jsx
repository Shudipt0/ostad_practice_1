import React from 'react'
import HeroSec from '../components/HeroSec'
import Part_2 from '../components/Part_2'
import Part_3 from '../components/Part_3'
import Part_4 from '../components/Part_4'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='pt-[72px]'>
      <HeroSec/>
      <Part_2/>
      <Part_3/>
      <Part_4/>
      <Footer/>
    </div>
  )
}

export default Home

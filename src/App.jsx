import React from 'react'
import { ScrollTrigger,SplitText }from 'gsap/all'
import gsap from 'gsap'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'




gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
  <main>
 <Navbar/>
 <Hero/>
 <div className='h-dvh bg-black'></div>
  </main>
  )
}

export default App
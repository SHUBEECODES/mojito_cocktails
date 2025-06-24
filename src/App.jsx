import React from 'react'
import { ScrollTrigger,SplitText }from 'gsap/all'
import gsap from 'gsap'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Cocktails from './Component/Cocktails'




gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
  <main>
 <Navbar/>
 <Hero/>
<Cocktails/>
  </main>
  )
}

export default App
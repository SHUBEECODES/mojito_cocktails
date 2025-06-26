import React from 'react'
import { ScrollTrigger,SplitText }from 'gsap/all'
import gsap from 'gsap'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Cocktails from './Component/Cocktails'
import About from './Component/About'




gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
  <main>
 <Navbar/>
 <Hero/>
<Cocktails/>
<About/>
  </main>
  )
}

export default App
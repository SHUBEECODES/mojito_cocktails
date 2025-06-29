import React from 'react'
import { ScrollTrigger,SplitText }from 'gsap/all'
import gsap from 'gsap'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Cocktails from './Component/Cocktails'
import About from './Component/About'
import Art from './Component/Art'
import Menu from './Component/Menu'
import Contact from './Component/Contact'




gsap.registerPlugin(ScrollTrigger,SplitText)

const App = () => {
  return (
  <main>
 <Navbar/>
 <Hero/>
<Cocktails/>
<About/>
<Art/>
<Menu/>
<Contact/>
  </main>
  )
}

export default App
import { Routes, Route, NavLink } from 'react-router-dom'

import Homepage from './routes/Homepage.jsx'
import ServicesPage from './routes/ServicesPage.jsx'
import HWWPage from './routes/HWWPage.jsx'
import PartnersPage from './routes/PartnersPage.jsx'
import AboutPage from './routes/AboutPage.jsx'

import logo from './assets/Vector.svg'

function App() {

  function activeLink(event) {
    let x = document.querySelectorAll('#navlist li')
    x.forEach((item) => {
      item.classList.replace('after:visible', 'after:invisible');
      event.target.classList.replace('after:invisible', 'after:visible')
    })
  }

  return (
    <>
      <nav className='flex flex-row justify-between items-center
                        p-9 w-full h-14 bg-zinc-900'>
        <img src={logo} alt="logo" className='relative top-[-1.6rem] left-14' />
        <ul id='navlist' className='flex flex-row gap-x-8 text-sm'>
          <NavLink to='/'><li onClick={activeLink} className='after:block after:visible after:h-[2px] after:w-full after:bg-yellow-300 after:rounded-full hover:after:visible text-white cursor-pointer'>Home</li></NavLink>
          <NavLink to='/services'><li onClick={activeLink} className='after:block after:invisible after:h-[2px] after:w-full after:bg-yellow-300 after:rounded-full hover:after:visible text-white cursor-pointer'>Services</li></NavLink>
          <NavLink to='/how-we-work'><li onClick={activeLink} className='after:block after:invisible after:h-[2px] after:w-full after:bg-yellow-300 after:rounded-full hover:after:visible text-white cursor-pointer'>How We Work</li></NavLink>
          <NavLink to='/our-partners'><li onClick={activeLink} className='after:block after:invisible after:h-[2px] after:w-full after:bg-yellow-300 after:rounded-full hover:after:visible text-white cursor-pointer'>Our Partners</li></NavLink>
          <NavLink to='/about-us'><li onClick={activeLink} className='after:block after:invisible after:h-[2px] after:w-full after:bg-yellow-300 after:rounded-full hover:after:visible text-white cursor-pointer'>About Us</li></NavLink>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/how-we-work' element={<HWWPage />} />
        <Route path='/our-partners' element={<PartnersPage />} />
        <Route path='/about-us' element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App

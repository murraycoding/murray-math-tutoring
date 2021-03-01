import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import MobileNavStyles from '../styles/MobileNav.module.scss'

export default function MobileNav() {
  //mobile nav menu button state
  const [menuOpen, changeMenu] = useState(false);

  return (
      <div className={`${menuOpen ? MobileNavStyles.open : MobileNavStyles.closed} ${MobileNavStyles.mobileNav}`}>
        <Image
          className="calcImage"
          src="/Calculator.png"
          alt="calculator"
          quality={50}
          height={583}
          width={273}
        />
        <div className={MobileNavStyles.calcbackground}>
          <ul className={MobileNavStyles.mobileNavLinks}>
            <li onClick={() => changeMenu(false)}><Link href="/">Home</Link></li>
            <li onClick={() => changeMenu(false)}><Link href="/about">About</Link></li>
            <li onClick={() => changeMenu(false)}><Link href="/services">Services</Link></li>
            <li onClick={() => changeMenu(false)}><Link href="/testimonials">Testimonials</Link></li>
            <li onClick={() => changeMenu(false)}><Link href="/contact" >Contact</Link></li>
          </ul>
        </div>
        <button className={`button ${MobileNavStyles.mobileNavButton}`} onClick={() => changeMenu(!menuOpen)}>Menu</button>
      </div>
  )
}
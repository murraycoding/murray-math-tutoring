import Link from 'next/link'
import HeaderStyles from '../styles/Header.module.scss'

// component imports
import MobileNav from './MobileNav'

export default function Header () {
  return (
    <>
      <div className={HeaderStyles.title}>
        <h1><Link href="/">Murray Math Tutoring - Test</Link></h1>
      </div>
      <div className={HeaderStyles.contactInfo}>
        <div><a className="hoverLink" href="mailto:murraymathtutoring@gmail.com" target="_blank">MurrayMathTutoring@gmail.com</a></div>
        <div><a className="hoverLink" href="tel:8606902007">(860)690-2007</a></div>
      </div>
      <nav className={HeaderStyles.nav}>
        <ul className={HeaderStyles.desktopNav}>
          <li className={HeaderStyles.navlink}><Link href="/">Home</Link></li>
          <li className={HeaderStyles.navlink}><Link href="/about">About</Link></li>
          <li className={HeaderStyles.navlink}><Link href="/services">Services</Link></li>
          <li className={HeaderStyles.navlink}><Link href="/testimonials">Testimonials</Link></li>
          <li className={HeaderStyles.navlink}><Link href="/contact">Contact</Link></li>
        </ul>
        <MobileNav />
      </nav>
    </>
  )
}
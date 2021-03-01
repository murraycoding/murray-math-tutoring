import Link from 'next/link'
import HeaderStyles from '../styles/Header.module.scss'

// component imports
import MobileNav from './MobileNav'

export default function Header () {
  return (
    <>
      <div className={HeaderStyles.title}>
        <h1><Link href="/">Murray Math Tutoring</Link></h1>
      </div>
      <div className={HeaderStyles.contactInfo}>
        <div>MurrayMathTutoring@gmail.com</div>
        <div>(860)690-2007</div>
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
import FooterStyles from '../styles/Footer.module.scss'

// component imports
import FooterSection from './FooterSection'

export default function Footer() {
  return (
    <footer className={FooterStyles.footerContainer}>
      <FooterSection>
        <p>This is a footer section.</p>
      </FooterSection>
    </footer>
  )
}
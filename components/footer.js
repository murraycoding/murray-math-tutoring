import FooterStyles from '../styles/Footer.module.scss'

// component imports
import FooterSection from './FooterSection'

export default function Footer() {
  return (
    <footer className={FooterStyles.footerContainer}>
      <FooterSection>
        <p>Phone: (860)690-2007</p>
        <p>Email: MurrayMathTutoring@gmail.com</p>
      </FooterSection>
      <FooterSection>
        <p>This is the second section.</p>
      </FooterSection>
      <FooterSection>
        <p>This is the third section. This is a commit to the footer branch.</p>
      </FooterSection>
    </footer>
  )
}
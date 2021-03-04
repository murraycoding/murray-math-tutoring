import FooterStyles from '../styles/Footer.module.scss'

// component imports
import FooterSection from './FooterSection'

export default function Footer() {
  return (
    <footer className={FooterStyles.footerContainer}>
      <FooterSection>
        <p>This is a footer section.</p>
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
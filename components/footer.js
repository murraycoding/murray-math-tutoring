import FooterStyles from '../styles/Footer.module.scss'

// component imports
import FooterSection from './FooterSection'

export default function Footer() {
  return (
    <footer className={FooterStyles.footerContainer}>
      <hr />
      <FooterSection>
        <table>
          <tr>
            <td>Phone:</td> <td>(860)690-2007</td>
          </tr>
          <tr>
            <td>Email:</td> <td>MurrayMathTutoring@gmail.com</td>
          </tr>
          <tr>
            <td>Facebook:</td> <td>@MurrayMathTutoring</td>
          </tr>
        </table>
      </FooterSection>
      <FooterSection>
        <p>This is the second section.</p>
      </FooterSection>
      <FooterSection>
        <p>New students get their first hour of tutoring free! Click here to learn more.</p>
        <button className="button">Free Tutoring</button>
      </FooterSection>
    </footer>
  )
}
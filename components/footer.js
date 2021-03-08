import Image from 'next/image'
import FooterStyles from '../styles/Footer.module.scss'

// component imports
import FooterSection from './FooterSection'

export default function Footer() {
  return (
    <>
    <hr className={FooterStyles.footerHR}/>
    <footer className={FooterStyles.footerContainer}>
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
        <div className="footerImageWrapper">
          <Image
            src="/MMT-logo.png"
            alt="logo"
            height={175}
            width={175}
          />
        </div>
      </FooterSection>
      <FooterSection>
        <p>New students get their first hour of tutoring free! Click here to learn more.</p>
        <button className="button">Free Tutoring</button>
      </FooterSection>
    </footer>
    </>
  )
}

/*
To-do: import link and update contact information with links
*/
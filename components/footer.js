import Image from 'next/image'
import Link from 'next/link'
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
            <td>Phone:</td> <td><a className="hoverLink" href="tel:8606902007">(860)690-2007</a></td>
          </tr>
          <tr>
            <td>Email:</td> <td><a className="hoverLink" href="mailto:murraymathtutoring@gmail.com" target="_blank">MurrayMathTutoring@gmail.com</a></td>
          </tr>
          <tr>
            <td>Facebook:</td> <td><a className="hoverLink" href="https://www.facebook.com/MurrayMathTutoring/" target="_blank">@MurrayMathTutoring</a></td>
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
        <button className="button"><Link href="/free-tutoring">Free Tutoring</Link></button>
      </FooterSection>
    </footer>
    </>
  )
}

/*
To-do: import link and update contact information with links
*/
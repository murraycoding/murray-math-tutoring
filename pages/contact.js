import ContactStyles from '../styles/Contact.module.scss'

export default function ContactPage() {
  return (
    <div className={ContactStyles.contactWrapper}>
      <div className={ContactStyles.contactInfo}>
        <h2 className="sectionTitle">Contact Info</h2>
        <p><span className="bold">Email:</span> <a className="hoverLink" href="mailto:murraymathtutoring@gmail.com" target="_blank">MurrayMathTutoring@gmail.com</a></p>
        <p><span className="bold">Phone:</span> <a className="hoverLink" href="tel:8606902007">(860)690-2007</a></p>
      </div>
      <div className={ContactStyles.socialMedia}>
        <h2 className="sectionTitle">Facebook</h2>
        <p><a className="hoverLink" href="https://www.facebook.com/MurrayMathTutoring/" target="_blank">@MurrayMathTutoring</a></p>
      </div>
    </div>
  )
}
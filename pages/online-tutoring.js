import ImageSection from '../components/ImageSection'

export default function OnlineTutoring() {
  return (
    <>
      <ImageSection 
        src="/MicrosoftSurface.jpg"
        alt="microsoft-surface"
        height={180}
        width={277}
        title="Microsoft Surface Pro"
        content="Using the Microsoft Surface Pro allows us to video chat with the students while writing the math out on our screen as if it were a piece of paper. In real-time, we are talking to the students about the math while writing it out on the computer for them to see. This method has the benefits of in-person learning with the flexibility of learning from the comfort of your own home."
        link="none"
      />
      <ImageSection
        src="/microphone.jpg"
        alt="microphone"
        height={250}
        width={250}
        title="Blue Snowball USB Microphone"
        content="We use a professional condensing microphone for premium audio quality. Students can hear us very clearly without background noise. This makes focusing on the lesson that much easier for students."
        link="none"
      />
      <p>This is the <a className="hoverLink" href="https://drive.google.com/file/d/1eh1307kQlF_0AQ0UuHJeyuK-xwvjLf_d/view?usp=sharing" target="_blank">LINK</a> for the online tutoring instructions.</p>
    </>
  )
}
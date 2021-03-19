import ImageSection from '../components/ImageSection'

export default function OnlineTutoring() {
  return (
    <>
      <h1 className="sectionTitle">Online Tutoring</h1>
      <p>Below is a description of how online tutoring works and what resources we use to best help the students we work with. You will also find important links to resources we often use during online tutoring. Please click <a className="hoverLink bold" href="https://drive.google.com/file/d/1eh1307kQlF_0AQ0UuHJeyuK-xwvjLf_d/view?usp=sharing" target="_blank">HERE</a> for a link to our general online tutoring instrcutions.</p>
      <ImageSection
        src="/meet.png"
        alt="google meet"
        height={192}
        width={192}
        title="Google Meet"
        content="We use Google Meet to video chat with our students. Google Meet provides a secure and easy to use environment for tutoring. Both students and tutors can share their screen, communicate effectively and send important resources to one another using the platform."
        type="external"
        link="http://meet.google.com"
        btnText="Google Meet"
      />
      <ImageSection
        src="/desmos.jpg"
        alt="desmos"
        height={200}
        width={200}
        title="Graphing Calculators"
        content="The Desmos Graphing Calculator is a very powerful and free graphing calculator we like to use as a teaching resource. We also have the ability to display an online TI-84 Calculator on the screen to show students exaclty how to use theirs. This combintation of digital tools makes the learning process easier and more effective. During a session we can also add screenshots of either calculator to the notes we provide students."
        type="external"
        link="http://www.desmos.com/calculator"
        btnText="Desmos Calculator"
      />
      <ImageSection 
        src="/MicrosoftSurface.jpg"
        alt="microsoft-surface"
        height={180}
        width={277}
        title="Microsoft Surface Pro"
        content="Using the Microsoft Surface Pro allows us to video chat with the students while writing the math out on our screen as if it were a piece of paper. In real-time, we are talking to the students about the math while writing it out on the computer for them to see. This method has the benefits of in-person learning with the flexibility of learning from the comfort of your own home."
        type="none"
      />
      <ImageSection
        src="/microphone.jpg"
        alt="microphone"
        height={250}
        width={250}
        title="Blue Snowball USB Microphone"
        content="We use a professional condensing microphone for premium audio quality. Students can hear us very clearly without background noise. This makes focusing on the lesson that much easier for students."
        type="none"
      />
      <p>This is the  for the online tutoring instructions.</p>
    </>
  )
}
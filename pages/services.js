import Link from 'next/link'

export default function ServicesPage() {
  return (
    <>
      <h2 className="sectionTitle">Homework Help</h2>
        <p className="bold">We will work with your child to complete their homework.</p>
        <p>While working on homework assignments, we can teach foundational skills which may be lacking or give enrichment to further expand a student's understanding of the concepts in class.</p>
        <hr className="sectionDivider"/>
      <h2 className="sectionTitle">Quiz/Test Prep</h2>
        <p className="bold">We will work with your child to prepare for upcoming tests or quizzes.</p>
        <p>We can review past homework assignments, reteach material and/or give extra practice all to prepare students for their upcoming tests or quizzes. Being teachers, we can identify several effective study techniques for students to use in preparing for any assessment. </p>
        <hr className="sectionDivider"/>
      <h2 className="sectionTitle">SAT Prep</h2>
        <p className="bold">We can work with yur child to prepare them for the SAT (Math section).</p>
        <p>We have years of experience preparing students for the SAT test. We will work with each student to create a customized study plan and track their progress up until the day of the SATs. Khan Academy is an official partner of College Board and it is the only online program we trust to give each student we work with the right practice before the test. Please feel free to contact us with any further questions about our SAT prep services.</p>
        <div class="buttonbar">
          <button className="button"><Link href="/contact">Contact</Link></button>
          <button className="button"><a href="http://www.khanacademy.org" target="_blank">Kahn Academy</a></button>
        </div>
        <hr className="sectionDivider"/>
        <div className="centerdiv">
          <h2 className="sectionTitle">Online Tutoring</h2>
          <p>We use Google Meet and Google Chat (formerly Google Hangouts) to communicate with the students we tutor and have a touchscreen laptop to write all of the math down for the students to see. For a more detailed look at how an online tutoring session looks, click the link below to learn more.</p>
          <button className="button"><Link href="/online-tutoring">Online Tutoring</Link></button>
        </div>
    </>
  )
}
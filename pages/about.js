import Link from 'next/link'
import Section from '../components/Section'

export default function AboutPage() {
  return (
    <>
      <h2 className="sectionTitle">About Us</h2>
        <p className="bold">Murray Math Tutoring a <span className="importantText">private online tutoring</span> service which is run by a husband and wife team of <span className="importantText">experienced math teachers.</span></p>
        <p> We work with all students on a one-on-one basis and work with them to determine both areas of strength and concepts to review and improve on. We work hard to ensure each student gets the attention they deserves and that all questions are clearly and carefully explained. Students should leave each session feeling confident about the material and more prepared for next class.</p>
        <div className="centerdiv">
          <p>Click below to check out the different services we offer!</p>
          <button className="button"><Link href="/services">Services</Link></button>
        </div>
        <hr className="sectionDivider"/>
      <h2 className="sectionTitle">Teachers at heart</h2>
        <p className="bold">Brian and Taylor are both certified math teachers in the state of Connecticut and have a combined total of over <span className="importantText">20 years of tutoring and teaching experience.</span></p>
        <p>We have both seen students struggle with math and we know it can be a difficult place to get out of. We work one-on-one with each student to meet them where they are and build their skills. We have also seen students who need a challenge in class and need some enrichment for the material they are working on. Our wide range of experiences makes us the perfect tutors for your child.</p>
        <hr className="sectionDivider"/>
      <h2 className="sectionTitle">First hour free</h2>
        <p className="bold">All new students get the first hour free!</p>
        <p>We believe in our tutoring so much we ALWAYS give a free hour of tutoring to any new students. For students, we do this to ensure a good match between the tutor and the student. For parents, we want you to make an informed decision about hiring a math tutor. We want both students and parents to know the value they are getting when working with Murray Math Tutoring.</p>
      <div className="centerdiv">
        <p>Fix this and determine why is it not fully expanded.</p>
        <button className="button">
          <Link href="/testimonials">Testimonials</Link>
        </button>
      </div>
    </>
  )
}
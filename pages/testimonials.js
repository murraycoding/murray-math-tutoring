import Testimonial from '../components/Testimonial'

export default function TestimonialsPage() {
  return (
    <>
      <Testimonial
        name="Candace O'Shea"
        important="What they did was nothing short of a miracle - turning someone who hated math and felt stupid into someone who could confidently handle math problems and succeed."
        review="Words are inadequate to express my thanks to Murray Math Tutoring.  Their ability to connect with my son, to motivate and encourage him was truly outstanding.  With their expert guidance, they  helped my son (who was seriously failing and way behind) to not only pass math but to close the year with a very positive final. They explained math in such a way that my son understood the concepts and could apply them in test settings. As he said to me, 'Taylor explains it do that it makes sense.  She actually helps me.' What they did was nothing short of a miracle - turning someone who hated math and felt stupid into someone who could confidently handle math problems and succeed And in a short amount of time. I could not recommend them more highly."
        last = {false}
      />
      <Testimonial
        name="Stephanie Ostrowski"
        important="Gained confidence and raised a whole grade in just 3 sessions.git "
        review="I highly recommend Murray Math Tutoring!!  My daughter was struggling in math and has now gained confidence and raised a whole grade in just 3 sessions. She’s so excited to be acing her tests."
        last = {false}
      />
      <Testimonial 
        name="Susan Wild"
        important="We would highly recommend Brian and his company to others."
        review="Typically a great math student, my daughter became completely overwhelmed when she started Geometry.  Brian has helped build her confidence and prepare her for her class work.  He is always accommodating to changes in her schedule. We would highly recommend Brian and his company to others."
        last = {false}
      />
      <Testimonial
        name="Dana Haussmann"
        important="They are very accommodating and work hard to find what is best for your schedule."
        review="I have used Brian and Taylor over the past two years and have been very happy with the experience. I have recommended them to several people  which has turned into a regular tutoring schedule. They are very accommodating and work hard to find what is best for your schedule. We meet weekly and often before a quiz or test and it has been very beneficial."
        last = {true}
      />
    </>
  )
}
import styles from '../styles/Home.module.scss'

// component imports
import ImageSection from '../components/ImageSection'

export default function Home() {
  return (
    <>
      <ImageSection
        src="/APlus.png"
        alt=""
        height={162}
        width={156}
        title="Welcome!"
        content="Murray Math Tutoring is an online math tutoring service run by a husband and wife team of certified teachers. For more information, please see our about section."
        link="about"
        btnText="about"
      />
      <ImageSection
        src="/Free.png"
        alt=""
        height={162}
        width={156}
        title="Your first hour is FREE!"
        content="Yes! You read that correctly. We believe in what we do so much we ALWAYS give the first hour of tutoring for free to any new students. Contact us today to schedule your first free hour and see if Murray Math Tutoring is right for you!"
        link="free-tutoring"
        btnText="Free Tutoring"
      />
      <ImageSection
        src="/Online.png"
        alt="online"
        height={162}
        width={156}
        title="How does online tutoring work?"
        content="This will be filled in later. This is another change."
        link="online-tutoring"
        btnText="online tutoring"
      />
    </>
  )
}
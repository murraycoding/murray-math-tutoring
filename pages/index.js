import styles from '../styles/Home.module.scss'

// component imports
import ImageSection from '../components/ImageSection'

export default function Home() {
  return (
    <>
      <ImageSection
      src="test image"
      alt=""
      title="Welcome!"
      content="Murray Math Tutoring is an online math tutoring service run by a husband and wife team of certified teachers. For more information, please see our about section."
      link="about"
      />
      <ImageSection
      src="test image 2"
      alt=""
      title="Free Tutoring"
      content="Yes! You read that correctly. We believe in what we do so much we ALWAYS give the first hour of tutoring for free to any new students. Contact us today to schedule your first free hour and see if Murray Math Tutoring is right for you!"
      link="contact"
      />
      <ImageSection
      src="test image e"
      alt=""
      title="How does online tutoring work?"
      content="This will be filled in later."
      link="contact"
      />
    </>
  )
}
import SectionStyles from '../styles/Section.module.scss'

export default function Section({ name, content }) {
  return (
    <section className={SectionStyles.sectionContent}>
      <h1 className={SectionStyles.sectionTitle}>{ name }</h1>
      <p className={SectionStyles.sectionText}>{ content }</p>
    </section>
  )
}
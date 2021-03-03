import FooterSetionStyles from '../styles/FooterSection.module.scss'

export default function FooterSection({ children }) {
  return (
    <div className={FooterSetionStyles.footerSection}>
      { children }
    </div>
  )
}
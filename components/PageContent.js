import PageContentStyles from '../styles/PageContent.module.scss'

export default function PageContent({ children }) {
  return (
    <div className={PageContentStyles.pagecontent}>
      { children }
    </div>
  )
}
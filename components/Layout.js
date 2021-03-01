import ContentBody from './ContentBody'
import Header from './Header'
import PageContent from './PageContent'

export default function Layout({ children }) {
  return (
    <>
      <ContentBody>
        <Header />
        <PageContent>
          { children }
        </PageContent>
      </ContentBody>
    </>
  )
}
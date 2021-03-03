import ContentBody from './ContentBody'
import Header from './Header'
import Footer from './footer'
import PageContent from './PageContent'

export default function Layout({ children }) {
  return (
    <>
      <ContentBody>
        <Header />
        <PageContent>
          { children }
        </PageContent>
        <Footer />
      </ContentBody>
    </>
  )
}
import h, { Fragment } from '@kuba/h'
import Comparebar from '@kuba/comparebar'
import Footer from '@kuba/footer'
import Searchbar from '@kuba/searchbar'
import Zoom from '@kuba/zoom'
import Header from './header'
import style from './style'

export default (site, children) =>
  <>
    <Header />
    <Searchbar />
    <main className={[style.site__main, site.className]}>
      {children.main}
    </main>
    {children.breadcrumb}
    <Comparebar />
    <Zoom />
    <Footer />
  </>

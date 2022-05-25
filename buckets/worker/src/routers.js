import { Router } from 'itty-router'
import marca from './marca'
import shape from './shape'
import shelf from './shelf'

const router = Router()

router.get('/marca/sitemap.xml', marca.sitemap)
router.get('/marca/:slug', marca)
router.get('/marca/:slug/view', marca.view)

router.get('/shape/search', shape.search)
router.get('/shape/sitemap.xml', shape.sitemap)
router.get('/shape/:slug', shape)
router.get('/shape/:slug/view', shape.view)

router.post('/shelf', shelf)
router.post('/shelf/marca', shelf.marca)

router.all('*', () =>
  new Response('404, not found!', { status: 404 })
)

export default router

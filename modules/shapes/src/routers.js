import h from '@kuba/h'
import { blueprint } from '@kuba/router'
import render from './render'

const router = blueprint('shapes', '/shapes')

router('/', async function home () {
  const { default: Home } = await import('./home' /* webpackChunkName: "home" */)
  render(<Home />)
})

import { didMount, paint, repaint } from '@kuba/h'
import close from './close'
import component from './component'
import getData from './getData'
import toggle from './toggle'

@paint(component)
class Splash {
  #cta
  #description
  #id
  #url
  #thumbnails
  #title

  get cta () {
    return this.#cta ??= ''
  }

  get description () {
    return this.#description ??= ''
  }

  get id () {
    return this.#id
  }

  get opened () {
    return toggle(this)
  }

  get url () {
    return this.#url ??= '#'
  }

  get thumbnails () {
    return this.#thumbnails ??= []
  }

  get title () {
    return this.#title ??= ''
  }

  constructor (props) {
    this.#id = props.id
  }

  @repaint
  change (descriptor) {
    this.#cta = descriptor.cta
    this.#description = descriptor.description
    this.#url = descriptor.url
    this.#thumbnails = descriptor.thumbnails
    this.#title = descriptor.title
    return this
  }

  @repaint
  close () {
    close(this)
    return this
  }

  @didMount
  async getData () {
    this.change(await getData())
    return this
  }

  redirect () {
    close(this)
    location.assign(this.url)
    return this
  }
}

export default Splash

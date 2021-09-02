import { didMount, paint, repaint } from '@kuba/h'
import * as f from '@kuba/f'
import props from '@kuba/props'
import hook from './hook'
import component from './component'
import getData from './getData'

@paint(component)
@props
class Shelf {
  #products
  #title

  get products () {
    return this.#products ??= f.repeat({}, 12)
  }

  get title () {
    return this.#title ??= ''
  }

  @repaint
  change (descriptor) {
    this.#products = descriptor.products
    this.#title = descriptor.title
    return this
  }

  @didMount
  async mount () {
    this.change(await getData())
    return this
  }

  @hook
  async refine () {
    this.change(await getData())
    return this
  }
}

export default Shelf

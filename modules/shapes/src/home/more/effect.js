import * as f from '@kuba/f'
import global, { useEffect } from '@kuba/global'
import middleware from '@kuba/middleware'

const { onChange } = f.dunder

const effect = middleware((target) => (
  useEffect(() => target[onChange](
    global.shapes,
    global.page
  ))
))

f.assign(effect, {
  onChange
})

export default effect

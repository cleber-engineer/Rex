import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import View from '@kuba/view'
import Concave from './concave'
import Descricao from './descricao'
import Material from './material'
import Modelo from './modelo'
import Nose from './nose'
import style from './style'
import Tail from './tail'
import Tamanho from './tamanho'
import Thumbnail from './thumbnail'
import Wheelbase from './wheelbase'

export default () =>
  <View>
    <container.Div className={style.compare__div} slot='main'>
      <Modelo master />
      <Modelo />
      <Thumbnail />
      <Descricao />
      <Tamanho />
      <Wheelbase />
      <Nose />
      <Tail />
      <Concave />
      <hgroup className={style.compare__hgroup}>
        <text.H2 className={style.compare__h2} master darker xs bold>Material</text.H2>
      </hgroup>
      <Material master />
      <Material />
    </container.Div>
  </View>

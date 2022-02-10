import h from '@kuba/h'
import container from '@kuba/container'
import text from '@kuba/text'
import Concave from './concave'
import Flares from './flares'
import Lixa from './lixa'
import Nose from './nose'
import style from './style'
import Tail from './tail'
import Wells from './wells'

export default () =>
  <container.Section className={style.especificacao}>
    <text.H2 className={style.especificacao__h2} master darker xs medium>Especificação</text.H2>
    <div className={style.especificacao__div}>
      <Nose />
      <Tail />
      <Concave />
      <Wells />
      <Flares />
      <Lixa />
    </div>
  </container.Section>

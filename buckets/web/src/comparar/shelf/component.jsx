import h, { Fragment } from '@kuba/h'
import container from '@kuba/container'
import story from '@kuba/story'
import style from './style'

export default (shelf) =>
  <story.Section>
    <section className={style.shelf__section}>
      <container.Div className={style.shelf__div}>
        {shelf.thumbnail}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.marca}
        {shelf.modelo}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.descricao}
      </container.Div>
    </section>
    <section className={[style.shelf__section, style.especificacao]}>
      <container.Div className={style.shelf__div}>
        {shelf.tamanho}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.wheelbase}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.nose}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.tail}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.concave}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.lixa}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.laminas}
      </container.Div>
      <container.Div className={style.shelf__div}>
        {shelf.material}
      </container.Div>
    </section>
  </story.Section>

import h from '@kuba/h'
import Container from '@kuba/container'
import Metro from '@kuba/metro'
import Repeat from '@kuba/repeat'
import Path from './path'
import style from './style'

export default (breadcrumb) =>
  <section className={[style.breadcrumb, breadcrumb.className]}>
    <Container className={style.breadcrumb__container}>
      <Metro className={style.breadcrumb__metro}>
        <div className={style.breadcrumb__div}>
          <Repeat iterator={breadcrumb.paths} component={Path} />
        </div>
      </Metro>
    </Container>
  </section>

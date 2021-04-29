import h, { Fragment } from '@kuba/h'
import Nav from '@kuba/nav'
import Site from '@kuba/site'
import Story from '@kuba/story'
import Summary from '@kuba/summary'
import text from '@kuba/text'
import style from './style.css'

export default (component) =>
  <Site className={style.components}>
    <Nav className={style.components__nav} slot='header' />
    <Fragment slot='main'>
      <Story className={style.components__story}>
        <text.H1 className={style.components__h1} master darker larger>{component.title}</text.H1>
        <text.P className={style.components__p} master small>{component.description}</text.P>
      </Story>
      <Story className={style.components__story}>
        <Summary className={style.components__summary} iterator={component.summary} />
      </Story>
    </Fragment>
  </Site>

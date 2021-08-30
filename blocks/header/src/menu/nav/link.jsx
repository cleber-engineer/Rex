import h from '@kuba/h'
import link from '@kuba/link'
import style from './style'

export default (props) =>
  <li className={style.nav__li}>
    <link.Master className={style.nav__link} href={props.url}>{props.text}</link.Master>
  </li>

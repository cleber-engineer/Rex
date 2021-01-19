import h from '@rex/htmlparser'
import Container from '@rex/container'
import Logo from '@rex/logo'
import style from './style.css'

import Drops from '@rex/drops'

export default (header) =>
  <header className={style.header}>
    <Container className={style.header__container}>
      <div className={style.header__partner}>partner</div>
      <div className={style.header__menu}>menu</div>
      <Logo className={style.header__logo} />
      <div className={style.header__search}>search</div>
      <div className={style.header__services}>services</div>
      <div className={style.header__user}>user</div>
      <div className={style.header__bag}>bag</div>
      <Drops name='region' subtitle='ative condições e' title='ofertas da sua região' />
    </Container>
  </header>

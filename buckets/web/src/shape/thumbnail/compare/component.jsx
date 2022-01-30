import h, { Fragment } from '@kuba/h'
import button from '@kuba/button'
import Hide from '@kuba/hide'
import icon from '@kuba/icon'
import Show from '@kuba/show'
import style from './style'

export default (compare) =>
  <>
    <Hide when={compare.pristine}>
      <button.naked.Master className={style.compare} onClick={() => compare.add()} darker medium>
        Adicionar
        <icon.Compare />
      </button.naked.Master>
    </Hide>
    <Show when={compare.pristine}>
      <button.naked.Master className={style.compare} darker medium />
    </Show>
  </>

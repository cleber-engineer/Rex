import h, { Fragment } from '@kuba/h'
import Site from '@kuba/site'
import More from './more'
import Shelf from './shelf'
import Title from './title'

export default () =>
  <Site>
    <Fragment slot='main'>
      <Title />
      <Shelf />
      <More />
    </Fragment>
  </Site>

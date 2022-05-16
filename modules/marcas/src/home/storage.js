import * as f from '@kuba/f'
import http, { api } from '@kuba/http'
import middleware from '@kuba/middleware'

const { onError, onResponse } = f.dunder

const storage = middleware((target) =>
  http
    .get(`${api.worker}/marca/shelf`)
    .json()
    .then(({ data, error }) => (
      error
        ? target[onError]()
        : target[onResponse](data)
    ))
)

f.assign(storage, {
  onError,
  onResponse
})

export default storage

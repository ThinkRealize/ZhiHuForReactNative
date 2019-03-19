import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://zhuanlan.zhihu.com',
  timeout: 10000
})

instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)

instance.interceptors.response.use(
  res => {
    return res
  },
  error => {
    const res = error.response

    if (res.status >= 401) {
      return Promise.reject(error) // eslint-disable-line
    }

    return Promise.reject(error)
  }
)

const createAPI = (url, method, config) => {
  config = config || {}
  return instance({
    url,
    method,
    ...config
  })
}

const columns = {
  articles: ({ userName = 'Mrfox', config }) =>
    createAPI(`/api/columns/${userName}/articles`, 'get', config)
}

export { columns }

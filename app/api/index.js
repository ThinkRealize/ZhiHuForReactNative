import axios from 'axios'
import merge from 'lodash.merge'

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
      return Promise.reject({ code: 401 }) // eslint-disable-line
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
    createAPI(
      `/columns/${userName}/articles`,
      'get',
      merge(
        {
          params: {
            include: `data[*].admin_closed_comment,comment_count,suggest_edit,is_title_image_full_screen,can_comment,upvoted_followees,can_open_tipjar,can_tip,voteup_count,voting,topics,review_info,author.is_following,is_labeled,label_info`
          }
        },
        config
      )
    )
}

export { columns }

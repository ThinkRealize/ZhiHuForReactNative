import React from 'react'
import { Text, View, ListView } from 'react-native'
import { columns } from '../../../api/index'
import ToastUtil from '../../../utils/ToastUtil'
import ItemCell from './ItemCell'
import Footer from './Footer'
import EmptyView from './EmptyView'
import ItemListView from './ItemListView'

const paging = {
  index: 0,
  limit: 10,
  is_end: false,
  is_start: true,
  next: '',
  previous: '',
  totals: 0
}
let articles = []

export default class Recommend extends React.Component {
  constructor(props) {
    super(props)
    console.log('props', props)
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      isRefreshing: false
    }
  }

  componentDidMount() {
    this.requestArticles()
  }

  onRefresh = () => {
    paging.index = 0
    paging.is_end = false
    paging.is_start = true
    articles = []
    this.requestArticles()
  }

  onPress = article => {
    const { navigate } = this.props.navigation
    navigate('Web', { article })
    ToastUtil.showShort('点击')
  }

  onEndReached = () => {
    this.requestArticles()
  }

  renderFooter = () => {
    const { isRefreshing } = this.state
    return isRefreshing ? <Footer /> : <View />
  }

  renderItem = article => (
    <ItemCell article={article} onPressHandler={this.onPress} />
  )

  requestArticles = () => {
    if (paging.is_end) {
      ToastUtil.showShort('没有更多数据了')
      return
    }

    this.setState({
      isRefreshing: true
    })
    columns
      .articles({
        config: {
          params: { limit: paging.limit, offset: paging.index * paging.limit }
        }
      })
      .then(({ data }) => {
        data.data = data.data.filter(item => {
          return item.title_image
        })

        Object.assign(paging, data.paging)
        articles = articles.concat(data.data)
        paging.index += 1

        this.setState({
          isRefreshing: false
        })

        console.log(articles)
      })
      .catch(error => {
        console.log('接口调用错误', error)
        this.setState({
          isRefreshing: false
        })
      })
  }

  render() {
    const { dataSource, isRefreshing } = this.state

    const isEmpty = Array.isArray(articles) && articles.length === 0

    if (isEmpty) {
      return (
        <EmptyView isRefreshing={isRefreshing} onRefresh={this.onRefresh} />
      )
    }

    return (
      <ItemListView
        dataSource={dataSource.cloneWithRows(articles)}
        onEndReached={this.onEndReached}
        isRefreshing={isRefreshing}
        onRefresh={this.onRefresh}
        renderFooter={this.renderFooter}
        renderItem={this.renderItem}
      />
    )
  }
}

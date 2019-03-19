import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Main from '../pages/MainPage/index'

export default class MainContainer extends React.Component {
  static navigationOptions() {
    return {
      title: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" size={25} color={tintColor} />
      )
    }
  }

  componentDidMount() {}

  render() {
    return <Main {...this.props} />
  }
}

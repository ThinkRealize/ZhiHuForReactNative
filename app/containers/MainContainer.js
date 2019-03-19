import React from 'react'
// import { View } from 'react-native'
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

  componentDidMount() {
    console.log('this.props', this.props)
  }

  render() {
    return <Main {...this.props} />
  }
}

// const mapStateToProps = state => {
//   const { read } = state
//   return {
//     read
//   }
// }

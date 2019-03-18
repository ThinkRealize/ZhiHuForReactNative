import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default class MainContainer extends React.Component {
  static navigationOptions() {
    return {
      title: '会员',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-trophy" size={25} color={tintColor} />
      )
    }
  }

  static componentDidMount() {}

  render() {
    return (
      <View>
        <Text>会员</Text>
      </View>
    )
  }
}

// const mapStateToProps = state => {
//   const { read } = state
//   return {
//     read
//   }
// }

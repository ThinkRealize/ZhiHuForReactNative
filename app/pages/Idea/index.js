import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Text, View } from 'react-native'

export default class MainContainer extends React.Component {
  static navigationOptions() {
    return {
      title: '想法',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-bulb" size={25} color={tintColor} />
      )
    }
  }

  static componentDidMount() {}

  render() {
    return (
      <View>
        <Text>想法</Text>
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

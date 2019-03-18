import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import MainContainer from '../containers/MainContainer'
import Idea from '../pages/Idea'
import Member from '../pages/Member'
import Mine from '../pages/Mine'
import Notice from '../pages/Notice'
import * as theme from '../Theme/index'

const TabContainer = createBottomTabNavigator(
  {
    Main: { screen: MainContainer },
    Idea: { screen: Idea },
    Member: { screen: Member },
    Notice: { screen: Notice },
    Mine: { screen: Mine }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: theme.mainPage.tabActiveColor,
      inactiveTintColor: theme.mainPage.tabInactiveColor,
      showIcon: true,
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 3
      }
    }
  }
)

const App = createStackNavigator(
  {
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#3e9ce9'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }
  }
)

export default App

import React from 'react'
import { View, Text, StyleSheet, DeviceEventEmitter } from 'react-native'
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view'
import { SafeAreaView } from 'react-navigation'

export default class MainPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      initialPage: 1,
      tabs: [
        {
          id: 'attention',
          title: '关注'
        },
        {
          id: 'recommend',
          title: '推荐'
        },
        {
          id: 'hotList',
          title: '热榜'
        },
        {
          id: 'video',
          title: '视频'
        }
      ],
      activeTab: {}
    }

    this.state.activeTab = this.state.tabs[this.state.initialPage]
  }

  componentDidMount() {}

  componentWillUnmount() {
    // DeviceEventEmitter.removeAllListeners('changeCategory')
  }

  handleTabChange = ({ i, from, ref }) => {
    this.setState({
      activeTab: this.state.tabs[i]
    })
  }

  renderContent = title => {
    return (
      <View>
        <Text>{title}</Text>
      </View>
    )
  }

  render() {
    const { tabs } = this.state

    const content = tabs.map(({ id, title }) => {
      return (
        <View key={id} tabLabel={title}>
          {this.renderContent(title)}
        </View>
      )
    })

    return (
      <SafeAreaView style={styles.container}>
        <ScrollableTabView
          initialPage={this.state.initialPage}
          renderTabBar={() => (
            <ScrollableTabBar
              tabStyle={styles.tab}
              textStyle={styles.tabText}
            />
          )}
          onChangeTab={this.handleTabChange}
          tabBarBackgroundColor="#ffffff"
          tabBarUnderlineStyle={styles.tabBarUnderline}
          tabBarActiveTextColor="#444444"
          tabBarInactiveTextColor="#808080"
        >
          {content}
        </ScrollableTabView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  drawerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd'
  },
  drawerTitleContent: {
    height: 120,
    justifyContent: 'flex-end',
    padding: 20,
    backgroundColor: '#3e9ce9'
  },
  drawerIcon: {
    width: 30,
    height: 30,
    marginLeft: 5
  },
  drawerTitle: {
    fontSize: 20,
    textAlign: 'left',
    color: '#fcfcfc'
  },
  drawerText: {
    fontSize: 18,
    marginLeft: 15,
    textAlign: 'center',
    color: 'black'
  },
  timeAgo: {
    fontSize: 14,
    color: '#aaaaaa',
    marginTop: 5
  },
  refreshControlBase: {
    backgroundColor: 'transparent'
  },
  tab: {
    // 使用 flex 点击 tab，tab 位置偏移。四个都点击后就不会发生偏移。
    // flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  tabText: {
    fontSize: 16
  },
  tabBarUnderline: {
    backgroundColor: '#444444',
    height: 2
  }
})

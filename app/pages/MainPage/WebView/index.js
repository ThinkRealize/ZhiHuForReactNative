import React from 'react'
import {
  StyleSheet,
  WebView,
  BackHandler,
  Dimensions,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Modal
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'
import { SafeAreaView } from 'react-navigation'
import LoadingView from '../../../components/LoadingView'

let canGoBack = false

class WebViewPage extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.article.userName
  })

  constructor(props) {
    super(props)
    this.state = {
      isShareModal: false
    }
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.goBack)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.goBack)
  }

  onActionSelected = () => {
    this.setState({
      isShareModal: true
    })
  }

  onNavigationStateChange = navState => {
    canGoBack = navState.canGoBack
  }

  goBack = () => {
    if (this.state.isShareModal) {
      this.setState({
        isShareModal: false
      })
      return true
    } else if (canGoBack) {
      this.webview.goBack()
      return true
    }
    return false
  }

  renderLoading = () => <LoadingView />

  render() {
    const { params } = this.props.navigation.state
    return (
      <SafeAreaView style={styles.container}>
        <WebView
          ref={ref => {
            this.webview = ref
          }}
          style={styles.base}
          source={{ uri: params.article.url }}
          javaScriptEnabled
          domStorageEnabled
          startInLoadingState
          scalesPageToFit
          decelerationRate="normal"
          onShouldStartLoadWithRequest={() => {
            const shouldStartLoad = true
            return shouldStartLoad
          }}
          onNavigationStateChange={this.onNavigationStateChange}
          renderLoading={this.renderLoading}
        />
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
    backgroundColor: '#FFF'
  },
  spinner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.65)'
  },
  spinnerContent: {
    justifyContent: 'center',
    width: Dimensions.get('window').width * (7 / 10),
    height: Dimensions.get('window').width * (7 / 10) * 0.68,
    backgroundColor: '#fcfcfc',
    padding: 20,
    borderRadius: 5
  },
  spinnerTitle: {
    fontSize: 18,
    color: '#313131',
    textAlign: 'center',
    marginTop: 5
  },
  shareParent: {
    flexDirection: 'row',
    marginTop: 20
  },
  shareContent: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: 40,
    height: 40
  }
})

export default WebViewPage

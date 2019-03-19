import Toast from 'react-native-root-toast'

const showShort = (content, isAlert) => {
  if (!content) {
    return
  }

  Toast.show(content.toString(), { duration: Toast.durations.SHORT })
}

const showLong = (content, isAlert) => {
  Toast.show(content.toString(), { duration: Toast.durations.LONG })
}

export default {
  showShort,
  showLong
}

import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { removeHtmlTag } from '../../../utils/FormatUtil'

const ItemCell = ({ article, onPressHandler }) => (
  <TouchableOpacity onPress={() => onPressHandler(article)}>
    <View style={styles.container}>
      <Text style={styles.title}>{article.title}</Text>
      <View style={styles.centerContent}>
        <Text numberOfLines={4} style={styles.excerpt}>
          {removeHtmlTag(article.excerpt)}
        </Text>
        <Image
          style={styles.img}
          borderRadius={4}
          source={{ uri: article.title_image }}
        />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.count}>
          {article.voteup_count} 赞同 ⋅ {article.comment_count} 评论
        </Text>
        <Icon name="ios-more" size={25} color={'#bfbfbf'} />
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fcfcfc',
    padding: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginTop: 5
  },
  title: {
    fontSize: 18,
    color: 'black'
  },
  centerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5
  },
  img: {
    width: 100,
    height: 80,
    marginLeft: 10
  },
  excerpt: {
    height: 68,
    flexShrink: 1,
    fontSize: 14,
    color: '#444444'
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  count: {
    fontSize: 14,
    marginTop: 5,
    marginRight: 5,
    color: '#999999'
  }
})

export default ItemCell

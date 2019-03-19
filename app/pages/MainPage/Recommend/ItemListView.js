import React from 'react'
import { ListView, RefreshControl, StyleSheet } from 'react-native'

const ItemListView = ({
  dataSource,
  isRefreshing,
  onEndReached,
  onRefresh,
  renderItem,
  renderFooter
}) => (
  <ListView
    initialListSize={1}
    dataSource={dataSource}
    renderRow={renderItem}
    style={styles.listView}
    onEndReached={() => onEndReached()}
    onEndReachedThreshold={10}
    renderFooter={renderFooter}
    refreshControl={
      <RefreshControl
        style={styles.refreshControlBase}
        refreshing={isRefreshing}
        onRefresh={() => onRefresh()}
        title="Loading..."
        colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
      />
    }
  />
)

const styles = StyleSheet.create({
  listView: {
    backgroundColor: '#eeeeec'
  },
  refreshControlBase: {
    backgroundColor: 'transparent'
  }
})

export default ItemListView

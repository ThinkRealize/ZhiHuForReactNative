## 问题

### 真机错误 The development server returned response error code: 500

不在同一个网段中。网络连接在同一个网段中解决问题。

### `yarn start` 启动项目，终端运行一直卡着：Loading dependency graph, done.

[Loading dependency graph, done](https://github.com/facebook/react-native/issues/16798)

使用 `react-native run-android`。该命令对设备无效，对模拟器有效，所以一直卡在 Loading dependency graph, done 。

### 在开发者模式，使用设备调试应用。 将连接电脑的 USB 线拔掉重新插上，提示不能连接到开发者服务器。

执行 `adb reverse tcp:8081 tcp:8081` 命令，转发端口数据。

### Slider has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/slider' instead of 'react-native'.

[react-native-gesture-handler 依赖导致的错误](https://github.com/kmagiera/react-native-gesture-handler/issues/482)

### ViewPagerAndroid has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-community/viewpager' instead of 'react-native'.

[react-native-gesture-handler 依赖导致的错误](https://github.com/kmagiera/react-native-gesture-handler/issues/482)

### 阴影属性

ios 支持，android 不支持。

### React Native Debugger 不能在 Network 面板上查看网络请求。

在面板上鼠标右击，点击 Enable Network Inspect，启用网络请求检查。重新加载页面，在 Network 面板中查看请求。

## TODO

### 移除 `react-native-vector-icons` 引用到的多余字体文件，减少包体积

### 推荐页面顶部的搜索栏

### 详情页面顶部操作栏，显示返回按钮

### 推荐页面单个文章更多操作弹窗

### 适配横屏

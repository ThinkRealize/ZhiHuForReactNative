// export default () => <App />
import { createAppContainer } from 'react-navigation'
import app from './app/containers/app'

const AppContainer = createAppContainer(app)

export default AppContainer

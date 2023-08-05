import { SafeAreaView, StatusBar } from 'react-native';
import { MainScreen } from './src/screens';
import { app } from './src/theme';

const App = () => {
  return (
    <SafeAreaView style={app.background}>
      <StatusBar
        backgroundColor='black'
        barStyle='light-content'
      />
      
      <MainScreen />
    </SafeAreaView>
  )
}

export default App

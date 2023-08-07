import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '../../components'

const MainScreen = () => {
  const [previousResult, setPreviousResult] = useState('0')
  const [result, setResult] = useState('100')

  const clearResult = () => setResult('0')

  const generateNumber = (clickedNumber: string) => {
    setResult(result.concat(clickedNumber))
  }

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.smallResult}>
        {previousResult}
      </Text>
      <Text
        adjustsFontSizeToFit
        style={styles.result}
        numberOfLines={1}
      >
        {result}
      </Text>

      <View style={styles.row}>
        <CustomButton label='C' onPress={clearResult}/>
        <CustomButton onPress={generateNumber} label='+/-' />
        <CustomButton onPress={generateNumber} label='%' />
        <CustomButton onPress={generateNumber} color='#ffffff' label='/' backgroundColor='#ff9427' />
      </View>

      <View style={styles.row}>
        <CustomButton onPress={generateNumber} color='#ffffff' label='4' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='5' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='6' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='-' backgroundColor='#ff9427' />
      </View>

      <View style={styles.row}>
        <CustomButton onPress={generateNumber} color='#ffffff' label='1' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='2' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='3' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='+' backgroundColor='#ff9427' />
      </View>

      <View style={styles.row}>
        <CustomButton onPress={generateNumber} color='#ffffff' label='0' backgroundColor='#2d2d2d' isLarge/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='.' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='=' backgroundColor='#ff9427' />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  calculatorContainer: {
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8
  },
  result: {
    color: '#ffffff',
    fontSize: 56,
    textAlign: 'right',
    marginBottom: 4,
  },
  smallResult: {
    color: '#a0a0a0',
    fontSize: 30,
    textAlign: 'right',
  },
})

export default MainScreen

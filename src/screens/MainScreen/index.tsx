import { StyleSheet, Text, View } from 'react-native'
import { CustomButton } from '../../components'
import { useCalculator } from '../../hooks'

const MainScreen = () => {
  const {
    previousResult,
    result,
    clearResult,
    positivoNegativo,
    deleteLastNumber,
    divide,
    generateNumber,
    multiply,
    minus,
    sum,
    evaluate
  } = useCalculator()

  return (
    <View style={styles.calculatorContainer}>
      {
        previousResult !== '0'
        ? (<Text style={styles.smallResult}>
            {previousResult}
          </Text>)
        : null
      }
      <Text
        adjustsFontSizeToFit
        style={styles.result}
        numberOfLines={1}
      >
        {result}
      </Text>

      <View style={styles.row}>
        <CustomButton label='C' onPress={clearResult}/>
        <CustomButton onPress={positivoNegativo} label='+/-' />
        <CustomButton onPress={deleteLastNumber} label='del' />
        <CustomButton onPress={divide} color='#ffffff' label='/' backgroundColor='#ff9427' />
      </View>

      <View style={styles.row}>
        <CustomButton onPress={generateNumber} color='#ffffff' label='7' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='8' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='9' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={multiply} color='#ffffff' label='x' backgroundColor='#ff9427' />
      </View>

      <View style={styles.row}>
        <CustomButton onPress={generateNumber} color='#ffffff' label='4' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='5' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='6' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={minus} color='#ffffff' label='-' backgroundColor='#ff9427' />
      </View>

      <View style={styles.row}>
        <CustomButton onPress={generateNumber} color='#ffffff' label='1' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='2' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='3' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={sum} color='#ffffff' label='+' backgroundColor='#ff9427' />
      </View>

      <View style={styles.row}>
        <CustomButton onPress={generateNumber} color='#ffffff' label='0' backgroundColor='#2d2d2d' isLarge/>
        <CustomButton onPress={generateNumber} color='#ffffff' label='.' backgroundColor='#2d2d2d'/>
        <CustomButton onPress={evaluate} color='#ffffff' label='=' backgroundColor='#ff9427' />
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

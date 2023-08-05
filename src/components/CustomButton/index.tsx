import { FC } from 'react'
import { ColorValue, StyleSheet, Text, View } from 'react-native'

interface Props {
  label: string
  backgroundColor?: ColorValue
  color?: ColorValue
}

const CustomButton: FC<Props> = ({
  label = '1',
  backgroundColor = '#9b9b9b',
  color = '#000000'
}) => {
  return (
    <View style={{ ...styles.button, backgroundColor }}>
      <Text style={{...styles.textButton, color}}>
        { label }
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    height: 80,
    justifyContent: 'center',
    width: 80,
  },
  textButton: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  }
})

export default CustomButton

import { FC } from 'react'
import { ColorValue, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  label: string
  backgroundColor?: ColorValue
  color?: ColorValue
  isLarge?: boolean
  onPress: ((value: string) => void)
}

const CustomButton: FC<Props> = ({
  label = '1',
  backgroundColor = '#9b9b9b',
  color = '#000000',
  isLarge = false,
  onPress
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
    >
      <View
        style={{
          ...styles.button,
          backgroundColor,
          width: isLarge ? 168 : 80
        }}
      >
        <Text
          style={{
          ...styles.textButton,
          color,
          textAlign: isLarge ? 'left' : 'center'
          }}
        >
          { label }
        </Text>
      </View>
    </TouchableOpacity>
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
  }
})

export default CustomButton

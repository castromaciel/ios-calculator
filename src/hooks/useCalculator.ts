import { useRef, useState } from "react"

enum OPERATIONS {
  SUM,
  MINUS,
  MULTIPLY,
  DIVIDE
}

const useCalculator = () => {
  const [previousResult, setPreviousResult] = useState('0')
  const [result, setResult] = useState('0')

  const lastOperation = useRef<OPERATIONS>()

  const clearResult = () => {
    setResult('0')
    setPreviousResult('0')
  }

  const deleteLastNumber = () => {
    let negativo = ''
    let auxResult = result
    if (result.includes('-')) {
      negativo = '-'
      auxResult = result.substring(1)
    }

    if (auxResult.length > 1) {
      setResult(negativo?.concat(auxResult.slice(0, -1)))
    } else {
      setResult('0')
    }
  }

  const generateNumber = (clickedNumber: string) => {

    if (result.includes('.') && clickedNumber === '.') return

    if (result.startsWith('0') || result.startsWith('-0')) {

      if (clickedNumber === '.') {
        setResult(result.concat(clickedNumber))

      } else if (clickedNumber === '0' && result.includes('.')) {
        setResult(result.concat(clickedNumber))

      } else if (clickedNumber !== '0' && !result.includes('.')) {
        setResult(clickedNumber)

      } else if (clickedNumber === '0' && !result.includes('.')) {
        setResult(result)

      } else {
        setResult(result.concat(clickedNumber))

      }

    } else {
      setResult(result.concat(clickedNumber))
    }

  }

  const positivoNegativo = () => {
    if(result.includes('-')) {
      setResult(result.replace('-', ''))
    } else {
      setResult('-' + result)
    }
  }

  const changePreviousResult = () => {
    if(result.endsWith('.')) {
      setPreviousResult(result.slice(0, -1))
    } else {
      setPreviousResult(result)
    }
    setResult('0')
    
  }

  const divide = () => {
    changePreviousResult()
    lastOperation. current = OPERATIONS.DIVIDE
  }

  const multiply = () => {
    changePreviousResult()
    lastOperation. current = OPERATIONS.MULTIPLY
  }

  const minus = () => {
    changePreviousResult()
    lastOperation. current = OPERATIONS.MINUS
  }

  const sum = () => {
    changePreviousResult()
    lastOperation. current = OPERATIONS.SUM
  }

  const evaluate = () => {
    const numResult = Number(result)
    const numPreviousResult = Number(previousResult)

    switch (lastOperation.current) {
      case OPERATIONS.DIVIDE:
        setResult(`${numPreviousResult / numResult}`)
        break

      case OPERATIONS.MULTIPLY:
        setResult(`${numPreviousResult * numResult}`)
        break

      case OPERATIONS.MINUS:
        setResult(`${numPreviousResult - numResult}`)
        break

      case OPERATIONS.SUM:
        setResult(`${numPreviousResult + numResult}`)
        break
    }
    setPreviousResult('0')
  }
  return {
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
  }
}

export default useCalculator
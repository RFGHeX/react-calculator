import React, { useState } from 'react'

export default () => {
  const [numOne, setNumOne] = useState('c')
  const [numTwo, setNumTwo] = useState('')
  const [operator, setOperator] = useState('add')
  const [result, setResult] = useState('')

  const operation = () => {
    switch (operator) {
      case 'add':
        setResult(numOne + numTwo)
        break
      case 'subtract':
        setResult(numOne - numTwo)
        break
      case 'multiply':
        setResult(numOne * numTwo)
        break
      case 'divide':
        setResult(numOne / numTwo)
        break
      default:
        setResult('What are you doing silly?!')
    }
  }

  const updateOperator = (event) => {
    setOperator(event.target.value)
  }

  const updateNumOne = (event) => {
    setNumOne(Number(event.target.value))
  }

  const updateNumTwo = (event) => {
    setNumTwo(Number(event.target.value))
    operation()
  }

  const test = (event) => {
    updateNumOne(event)
    operation()
  }

  return (
    <div>
      <input type="text" onChange={test} />
      <select id="operator" onChange={updateOperator}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="text" onChange={updateNumTwo} />
      <button type="button" className="equals" onClick={operation}>=</button>
      <div>
        {result}
      </div>
    </div>
  )
}

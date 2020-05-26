import React, { useState } from 'react'

export default () => {
  const [numOne, setNumOne] = useState('')
  const [numTwo, setNumTwo] = useState('')
  const [operator, setOperator] = useState('add')
  const [result, setResult] = useState('')
  const [warning, setWarning] = useState('')


  const operation = () => {
    if (Number(numOne) && Number(numTwo)) {
      if (warning) setWarning('')

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
    } else {
      setWarning('Thats not math silly')
      setResult('')
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
  }


  return (
    <div>
      <h1>Its a calculator... its does math and shit</h1>
      <input type="text" onChange={updateNumOne} />
      <select id="operator" onChange={updateOperator}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
      </select>
      <input type="text" onChange={updateNumTwo} />
      <button type="button" className="equals" onClick={operation}>=</button>
      <input defaultValue={result} disabled />
      <div className="warning">{warning ? `${warning}` : null}</div>
    </div>
  )
}

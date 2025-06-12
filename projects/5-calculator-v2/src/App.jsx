import { useState } from 'react'
import './App.css'
import styles from "./App.module.css"
import ButtonsCont from './components/ButtonsCont'
import Display from './components/Display'

function App() {
  const [inputVal, setInputVal] = useState("")

  let onBtnClick = (btnText) => {
    if(btnText === "C") {
      setInputVal("")
    }else if(btnText === '=') {
      const result = eval(inputVal)
      setInputVal(result)
    }else {
      setInputVal(inputVal+btnText)
    }
  }
  // setInputVal("C")
  return <div className={styles.calculator}>
        <Display 
          inputVal={inputVal}/>
        <ButtonsCont 
          onBtnClick={onBtnClick}/>
    </div>
}

export default App
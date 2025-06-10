import './App.css'
import styles from "./App.module.css"
import ButtonsCont from './components/ButtonsCont'
import Display from './components/Display'

function App() {
  return <div className={styles.calculator}>
        <Display/>
        <ButtonsCont/>
    </div>
}

export default App
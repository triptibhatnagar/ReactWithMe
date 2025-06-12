import styles from "./Display.module.css"

const Display = ({inputVal}) => {
    
    return <input type="text" className={styles.display} value={inputVal} readOnly/>
}

export default Display
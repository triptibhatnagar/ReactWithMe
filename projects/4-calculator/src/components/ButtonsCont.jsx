import styles from "./ButtonsCont.module.css"

function ButtonsCont() {
    const btnNames = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
    return <div className={styles.btnContainer}>
        {btnNames.map((val) => {
            return <button className={styles.btn}>{val}</button>
        })}
        </div>
}
export default ButtonsCont
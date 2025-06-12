import styles from "./FoodInput.module.css"

const FoodInput = ({handleOnKeyDown}) => {
    return <input 
    type="text" 
    className={styles.input} 
    placeholder="Enter food items here"
    // onChange={handleOnChange}
    onKeyDown={handleOnKeyDown}
    />
}
export default FoodInput
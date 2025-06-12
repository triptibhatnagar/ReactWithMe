import styles from "./FoodInput.module.css"

const FoodInput = ({handleOnChange}) => {
    return <input 
    type="text" 
    className={styles.input} 
    placeholder="Enter food items here"
    onChange={handleOnChange}
    />
}
export default FoodInput
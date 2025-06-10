import styles from "./FoodInput.module.css"

const FoodInput = () => {
    const handleOnChange = (e) => {
        console.log(e.target.value)
    }
    return <input 
    type="text" 
    className={styles.input} 
    placeholder="Enter food items here"
    onChange={handleOnChange}
    />
}
export default FoodInput
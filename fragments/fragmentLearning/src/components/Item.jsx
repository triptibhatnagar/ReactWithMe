import styles from "./Item.module.css"

const Item = ({foodItem, handleBuyBtn}) => {

    // const handleByBtn = (foodItem) => {
    //     console.log(`Item being bought: ${foodItem}`)
    // }
    // const handleByBtn = () => {
    //     console.log(`Item being bought: ${foodItem}`)
    // }
    // const handleByBtn = (e) => {
    //     console.log(e)//SyntheticBaseEvent
    //     console.log(`Item being bought: ${foodItem}`)
    // }
    //array destructuring
    // let {foodItem} = props // OR directly in parametr
    // return <li class="list-group-item">{props.foodItem}</li>

    // css modules
    return <li className={`${styles['item-span']} ${styles['each-item']} list-group-item`}>
        <span className="item-span">{foodItem}</span>
        <button className={`${styles.button} btn btn-info`} onClick={(e) => handleBuyBtn(e)}>Buy</button> 
        {/* onClick={() => handleByBtn(foodItem) */}
        {/* onClick={handleByBtn} */} {/**passing ref only */}
    </li>
}
export default Item
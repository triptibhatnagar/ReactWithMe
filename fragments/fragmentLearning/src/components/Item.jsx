import styles from "./Item.module.css"

const Item = ({foodItem}) => {
    //array destructuring
    // let {foodItem} = props // OR directly in parametr
    // return <li class="list-group-item">{props.foodItem}</li>

    // css modules
    return <li className={`${styles['item-span']} ${styles['each-item']} list-group-item`}>
            <span className="item-span">{foodItem}</span>
        </li>
}
export default Item
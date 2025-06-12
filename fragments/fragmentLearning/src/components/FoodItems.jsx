import { useState } from "react"
import Item from "./Item"

let FoodItems = ({items}) => {
    // save index or names(if unique) of those elements who are clicked
    let [activeItems, setActiveItems] = useState([])
    let onBuyBtn = (item, e) => {
        let newItems = [...activeItems, item]
        setActiveItems(newItems)
    }

    return <>
        <ul className="list-group">
            {items.map((val) => {
                // props passed as an atttribute
            return <Item 
            key={val} 
            foodItem={val} 
            handleBuyBtn={(e) => onBuyBtn(val, e)}
            bought={activeItems.includes(val)}
            />
            // key required for virtal dom
            })}
        </ul>
    </>
}
export default FoodItems
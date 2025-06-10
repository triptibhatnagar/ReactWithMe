import Item from "./Item"

let FoodItems = ({items}) => {
    return <>
        <ul className="list-group">
            {items.map((val) => {
                // props passed as an atttribute
            return <Item key={val} foodItem={val}/>
            // key required for virtal dom
            })}
        </ul>
    </>
}
export default FoodItems
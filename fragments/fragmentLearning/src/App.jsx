import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
import FoodInput from './components/FoodInput'
import { useState } from 'react'

function App() {
  // let foodItems = ["Roti", "Salad", "Brocolli","Green veggies", "Salad", "Chawal"]

  let [textToShow, setTextState] = useState()
  let [foodItems, setFoodItems] = useState(["Green veggies", "Salad", "Chawal"])

  // let foodItems = []

  // conditional rendering
  // if(foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>
  // }

  // props : from parent to child

  // let emptyMsg = foodItems.length === 0 ? <h3>I am still hungry</h3> : null
  // let textStateArr  = useState("Food Item entered by user") // useState return array of 2 elements, 1st : current value, 2nd :
  // let textToShow = textStateArr[0] 
  // let setTextState = textStateArr[1]
  // console.log(`Current value of text state: ${textToShow}`)

  // we can do its destructuring as array as well
  // let [textToShow, setTextState] = useState("Food Item entered by user")

  // let textToShow = "Food Item entered by user"

  const onKeyDown = (e) => {
    if(e.key === "Enter") {
      let newFoodItem = e.target.value
      console.log("New food item is: "+newFoodItem)
      let newItems = [...foodItems, newFoodItem]
      setFoodItems(newItems)
      e.target.value = ""
    }
    // textToShow = e.target.value // but textToShow remain as it is
    // console.log(e.target.value)
    setTextState(e.target.value)
    // jb dubara paint ho ra h, to react hr bar textToShow ko "Food Item entered by user" hee set kr ra h
  }
  return <>
  {/* passing children to a container - props.children */}
    <Container>
      {/* // <React.Fragment> */}
      <h1 className='food-heading'>Healthy Food</h1>
      {/* {emptyMsg} */}
      {/* {foodItems.length === 0 && <h3>I am still hungry</h3>} */}
      <ErrorMsg items={foodItems}/>
      <FoodInput handleOnKeyDown={onKeyDown}/>
      {/* <p>{textToShow}</p> */}
      <FoodItems items={foodItems}/>
      {/* </React.Fragment> */}
    </Container>
    {/* <Container>
      <p>Above is the list of healthy food that you must eat on a regular basis.</p>
    </Container> */}
  </>
}

export default App
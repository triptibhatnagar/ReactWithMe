import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'

function App() {
  let foodItems = ["Green veggies", "Sabji", "Chawal", "Roti", "Salad", "Brocolli"]

  // let foodItems = []

  // conditional rendering
  // if(foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>
  // }

  // props : from parent to child

  // let emptyMsg = foodItems.length === 0 ? <h3>I am still hungry</h3> : null
  return (
    // <React.Fragment>
    <>
      <h1 className='food-heading'>Healthy Food</h1>
      {/* {emptyMsg} */}
      {/* {foodItems.length === 0 && <h3>I am still hungry</h3>} */}
      <ErrorMsg items={foodItems}/>
      <FoodItems items={foodItems}/>
    {/* </React.Fragment> */}
    </>
  )
}

export default App

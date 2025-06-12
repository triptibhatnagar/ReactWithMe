import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/ErrorMsg'
import Container from './components/Container'
import FoodInput from './components/FoodInput'

function App() {
  let foodItems = ["Green veggies", "Sabji", "Chawal", "Roti", "Salad", "Brocolli"]

  // let foodItems = []

  // conditional rendering
  // if(foodItems.length === 0) {
  //   return <h3>I am still hungry</h3>
  // }

  // props : from parent to child

  // let emptyMsg = foodItems.length === 0 ? <h3>I am still hungry</h3> : null

  let textToShow = "Food Item entered by user"

  const handleOnChange = (e) => {
    console.log(e.target.value)
    textToShow = e.target.value // but textToShow remain as it is
  }
  return <>
  {/* passing children to a container - props.children */}
    <Container>
      {/* // <React.Fragment> */}
      <h1 className='food-heading'>Healthy Food</h1>
      {/* {emptyMsg} */}
      {/* {foodItems.length === 0 && <h3>I am still hungry</h3>} */}
      <ErrorMsg items={foodItems}/>
      <FoodInput handleOnChange={handleOnChange}/>
      <p>{textToShow}</p>
      <FoodItems items={foodItems}/>
      {/* </React.Fragment> */}
    </Container>
    {/* <Container>
      <p>Above is the list of healthy food that you must eat on a regular basis.</p>
    </Container> */}
  </>
}

export default App
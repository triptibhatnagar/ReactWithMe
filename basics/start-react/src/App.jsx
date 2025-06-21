function App() {
  // return "Hey"
  let name = "UserX"
  let age = 10
  function greetings() {
    console.log("Hello",name)
  }
  // greetings()
  var changeUsername = () => {
    console.log(name)
    name = "UserY"
    console.log(name)
    // trying to interact with dom directly which will not work, so learn useState hook
  }
  return <div>
    <h1>Username: {name}</h1>
    <h2>Hello bro</h2>
    <h3>Age of {name} is: {age}</h3>
    {/* <button onClick={greetings}>Greetings</button> */}
    <button onClick={changeUsername}>Change Username</button>
  </div>
}
export default App
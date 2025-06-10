import  {Button}  from "./Button";
import Hello from "./Hello";
import Random from "./Random"

function App() {
  // dynamic content
  let myName = "abc"
  let fullName = () => {
    return "abc xyz"
  }
  let no = 78
  // return <h1>Hello</h1>
  return <div>
    {/* <h1>hello {myName}</h1> */}
    <h1>hello {fullName()}</h1>
    <Button/>
    <Hello/>
    <p>you roll no is {no}</p>
    <Random/>
    <Random/>
    <Random/>
    <Random/>
    {/* or  */}
    <Random></Random>
  </div>
}

export default App
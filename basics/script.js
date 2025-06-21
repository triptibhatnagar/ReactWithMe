// let h1 = document.createElement('h1')
// h1.innerHTML = "Hello from HTML"

// let rootDiv = document.querySelector('.root')
// rootDiv.appendChild(h1)



// createElement("element", props [like attributes in html], "text content")
let h1 = React.createElement('h1', null, "hello from react")

console.log(h1)

// now to show on frontend
var root = ReactDOM.createRoot(document.querySelector('.root'))
root.render(h1)
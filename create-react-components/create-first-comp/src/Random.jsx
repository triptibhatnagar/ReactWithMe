function Random() {
    let number = Math.random() *100
    return <h1 style={{"backgroundColor" : "#776622"}}>Your random no is: {Math.round(number)}</h1>
}
export default Random
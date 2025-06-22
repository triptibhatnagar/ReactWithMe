import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const notify = () => toast("Wow so easy!");
  const [data, setData] = useState([])// initially empty

  const btnClick = async () => {
    // console.log("Heyyy")
    const response = await axios.get("https://picsum.photos/v2/list?page=2&limit=10")
    console.log(response) // Promise {<pending>}
    // const data = response.data
    // console.log(data)

    setData(response.data)// then gets filled with response
  }

  // w/o btnclick, now data will load itself

  useEffect(() => {
    btnClick()
  }, [])

  return (
    <div>
      <button onClick={notify}>Notify!</button>
        <ToastContainer />
      {/* <button className='bg-blue-500 px-4 py-2 m-4 rounded-md text-xl active:scale-90' onClick={btnClick}>Get Data</button> */}
      <div className='bg-zinc-800 p-5 m-3'>
        {data.map((val, idx) => {
          return <div key={idx} className='bg-zinc-400 m-3 p-2 rounded-md text-center text-black font-semibold'>
            <img src={val.download_url} alt="" />
            <h1>{val.author}</h1>
          </div>
        })}
      </div>
    </div>
  )
}

export default App
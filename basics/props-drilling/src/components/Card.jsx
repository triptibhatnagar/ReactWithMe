import React from 'react'

const Card = (props) => {
    // console.log(props)
  return (
    // <div>
    //     <h1 className='text-3xl'>
    //         This is a card of {props.user}
    //     </h1>
    // </div>
    <div className='bg-white text-black inline-block p-6 text-center rounded-md m-5 w-60 h-80'>
        <img src={props.imgSrc} alt="" className='h-32 w-32 rounded-full mb-3 ml-9 mt-4'/>
        <h1 className='text-xl font-semibold'>@{props.username}</h1>
        <h2>{props.city}, {props.age}</h2>
        <h2 className='font-medium text-zinc-500'>{props.profession}</h2>
        <button className='bg-blue-500 p-2 mt-3 rounded-md text-white'>Add Friend</button>
    </div>
  )
}

export default Card

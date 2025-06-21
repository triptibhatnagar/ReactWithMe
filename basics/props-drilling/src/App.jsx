import Card from './components/Card'

const App = () => {
  // let user = "abc"
  let data = [{
    "username": "tech_guru21",
    "city": "Bangalore",
    "age": 28,
    "profession": "Software Developer",
    "profile_photo": "https://randomuser.me/api/portraits/men/21.jpg"
  },
  {
    "username": "creative_minds",
    "city": "Mumbai",
    "age": 24,
    "profession": "Graphic Designer",
    "profile_photo": "https://randomuser.me/api/portraits/women/34.jpg"
  },
  {
    "username": "data_diva",
    "city": "Hyderabad",
    "age": 30,
    "profession": "Data Analyst",
    "profile_photo": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "username": "code_master",
    "city": "Delhi",
    "age": 26,
    "profession": "Full Stack Developer",
    "profile_photo": "https://randomuser.me/api/portraits/men/52.jpg"
  },
  {
    "username": "ai_wizard",
    "city": "Pune",
    "age": 32,
    "profession": "AI Engineer",
    "profile_photo": "https://randomuser.me/api/portraits/men/18.jpg"
  }]

  return (
    <>
      <div className='p-5 flex items-center flex-wrap justify-center'>
        {/* <Card user={user}/>
        <Card user="xyz"/> */}

        {/* <Card user="Ram" age="29" city="ayodhya" /> */}

        {data.map((val, idx) => {
          return <Card key={idx} username={val.username} city={val.city} age={val.age} profession={val.profession} imgSrc={val.profile_photo}/>
        })}
      </div>
    </>
  )
}

export default App

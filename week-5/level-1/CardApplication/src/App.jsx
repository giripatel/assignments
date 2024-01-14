import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BusinessCard from './components/BusinessCard'

function App() {
  const [userDetails, setUserDetails] = useState([{
    name : 'Giridhar',
    description : 'I am software developer',
  },{
    name : 'Giridhar',
    description : 'I am software developer',
  }])
  function onChange(event){
    const [name,value] = event.target;

    setUserDetails((prev) => ({
      ...prev,
      name: name,
      description: description,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userDetails)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={onChange} type="text" />
      <input name='description' onChange={onChange} type="text" />
      <br />
      <br />
      <button type='submit'>Submit</button>
    </form>
    {/* {userDetails.map((data,index) => ( 
      <div key={index}> */}
      <BusinessCard details={userDetails} ></BusinessCard>
      {/* </div>
      ))} */}
    </>
  )
}

export default App

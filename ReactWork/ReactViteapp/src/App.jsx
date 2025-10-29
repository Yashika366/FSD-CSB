import React from 'react'
import './App.css'
import Profile from './Component/Profile'

const App = () => {
  return (
    <div className='Container'>
      <h1>Hello, React with Vite!</h1>
      <h3 style={{backgroundColor:'black',color:'white'}}>
        <Profile/>
        

      </h3>
    </div>
  )
}

export default App
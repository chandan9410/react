import { useState } from 'react'

import './App.css'
import UserContext from './context/Usercontext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContext>
      <h1> context api </h1>
    </UserContext>
  )
}

export default App;

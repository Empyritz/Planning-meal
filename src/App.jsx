import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

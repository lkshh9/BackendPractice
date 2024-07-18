import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('/api/data')
    .then((response) => {
      setData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    
      <div>
        <h1>Lokesh Kumawat</h1>
        <p>Data : {data.length} </p>

        {data.map((data, index) => (
          <div key={data.id}>
            <h3>{data.title}</h3>
            <p>{data.content}</p>
          </div>
        ))}

      </div>
    
  )
}

export default App

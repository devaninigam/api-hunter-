import axios from 'axios'
import './App.css'
import React, { useEffect } from 'react'

function App() {
  const apiUrl = "https://jsonplaceholder.typicode.com/todos"

  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setPosts(response.data || [])
    })
  }, [])

  return (
    <>
      {
        posts.map((post, index) => (
          <div key={index}>
            <h1>{post.id}</h1>
            <h1>{post.title}</h1>
            <h1>{post.completed}</h1>
          </div>
        ))
      }
    </>
  )
}

export default App
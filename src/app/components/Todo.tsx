"use client"

import React, { useEffect, useState } from "react"

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

function TodoPost() {
  const [todo, setTodo] = useState<Todo | null>(null)

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      const result = await res.json()
      setTodo(result)
    }

    fetchData()
  }, [])

  return <div>Title: {todo?.title}</div>
}

export default TodoPost

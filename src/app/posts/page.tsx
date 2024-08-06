import React from "react"
import TodoPost from "../components/Todo"
import Link from "next/link"
import { resolve } from "path"

export interface Post {
  id: number
  title: string
  body: string
}

export default async function PostPage({}) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts `, {
    next: {
      revalidate: 16,
    },
  })

  const posts = await res.json()

  const postJSX = posts.map((post: Post) => (
    <Link href={`/posts/${post.id}`} key={post.id}>
      <div className="bg-white p-4 rounded-md shadow">
        <h3 className="text-lg text-gray-800"> {post.title}</h3>
        <p className="text-gray-500">{post.body}</p>
      </div>
    </Link>
  ))

  return (
    <main className="p-4">
      <TodoPost />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postJSX}
      </div>
    </main>
  )
}

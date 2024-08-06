import Link from "next/link"

export default async function PostDetails({ postId }: { postId: number }) {
  //   await new Promise((resolve: any) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, 2000)
  //   })

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId} `,
    {
      next: {
        revalidate: 16,
      },
    }
  )
  const post = await res.json()

  return (
    <div className="flex flex-col ">
      <div className="p-4 bg-white rounded-md shadow">
        <h3 className="text-lg text-gray-800"> {post.title}</h3>
        <p className="text-gray-500">{post.body}</p>
      </div>
    </div>
  )
}

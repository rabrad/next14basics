import PostDetails from "../../components/PostId"
import Link from "next/link"
import { Suspense } from "react"

export default async function postDetails({
  params,
}: {
  params: { postId: number }
}) {
  const postId = params.postId
  const loadingJSX = (
    <div className="flex justify-center bg-white p-4  rounded-md shadow">
      <p className="text-2xl text-green-500 self-center ">Loading...</p>
    </div>
  )

  return (
    <div className="p-4 flex flex-col gap-4">
      <Link href="/posts">
        <p className="bg-blue-500 py-2 px-4 rounded-lg w-fit">Back to Posts</p>
      </Link>
      <Suspense fallback={loadingJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  )
}

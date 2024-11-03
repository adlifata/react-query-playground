import { UseQueryResult } from "@tanstack/react-query"
import { Post } from "../types/post"
import Card from "./Card"
import LoadingSpinner from "./LoadingSpinner"

type PostListingProp = {
  postsQuery: UseQueryResult<Post[], Error>
}

const PostListing: React.FC<PostListingProp> = ({ postsQuery }) => {
  if (postsQuery.isLoading || postsQuery.isFetching) {
    return <LoadingSpinner />
  }

  if (postsQuery.isError) {
    return (
      <div
        className="mb-4 cursor-pointer rounded-md border-[1px] border-gray-400 p-4 text-red-500"
        onClick={() => {
          postsQuery.refetch()
        }}
      >
        Failed to load comment. Tap try again.
      </div>
    )
  }

  return (
    <>
      {postsQuery.data!.map((post) => (
        <Card
          key={post.id}
          className="mb-4 rounded-md border-[1px] border-gray-200 p-4 hover:shadow-lg"
        >
          <p className="mb-2 text-lg font-semibold">{post.title}</p>
          <p className="text-xs">{post.body}</p>
        </Card>
      ))}
    </>
  )
}

export default PostListing

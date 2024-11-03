import { PostComment } from "../types/comment"
import { UseQueryResult } from "@tanstack/react-query"
import LoadingSpinner from "./LoadingSpinner"
import Card from "./Card"

type CommentListingProp = {
  commentsQuery: UseQueryResult<PostComment[], Error>
}

const CommentListing: React.FC<CommentListingProp> = ({ commentsQuery }) => {
  if (commentsQuery.isLoading || commentsQuery.isFetching) {
    return (
      <div className="mb-4 rounded-md border-[1px] border-gray-400 p-4">
        <LoadingSpinner />
      </div>
    )
  }

  if (commentsQuery.isError) {
    return (
      <div
        className="mb-4 cursor-pointer rounded-md border-[1px] border-gray-400 p-4 text-red-500"
        onClick={() => {
          commentsQuery.refetch()
        }}
      >
        Failed to load comment. Tap try again.
      </div>
    )
  }

  return (
    <Card className="mb-4 rounded-md border-[1px] border-gray-200 p-4 hover:shadow-lg">
      {commentsQuery.data?.map((comment) => (
        <div className="mb-6 flex flex-col">
          <p className="mb-1 text-sm">{comment.body}</p>
          <p className="text-xs font-bold">{comment.email}</p>
        </div>
      ))}
    </Card>
  )
}

export default CommentListing

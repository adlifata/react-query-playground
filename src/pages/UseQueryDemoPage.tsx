import BaseContainer from "../components/BaseContainer"
import CommentListing from "../components/CommentListing"
import NavBar from "../components/NavBar"
import PostListing from "../components/PostListing"
import { useMultipleComments, usePosts } from "../services/queries"

export default function UseQueryDemoPage() {
  const postsQuery = usePosts(5)
  const commentsQueries = useMultipleComments(
    Array.from({ length: 3 }, (_, index) => index + 1)
  )

  return (
    <>
      <NavBar title="Query Demo" />
      <BaseContainer>
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2">
          {/* UseQuery Demo */}
          <section className="mx-5 mb-6 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-4 text-2xl font-bold">UseQuery Demo</h2>
              <PostListing postsQuery={postsQuery} />
            </div>
          </section>

          {/* UseQueries Demo */}
          <section className="mx-5">
            <div className="flex flex-col">
              <h2 className="mb-4 text-2xl font-bold">UseQueries Demo</h2>
              {commentsQueries.map((commentQuery, index) => (
                <CommentListing key={index} commentsQuery={commentQuery} />
              ))}
            </div>
          </section>
        </div>
      </BaseContainer>
    </>
  )
}

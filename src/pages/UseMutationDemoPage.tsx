import { SubmitHandler, useForm } from "react-hook-form"
import BaseContainer from "../components/BaseContainer"
import PostListing from "../components/PostListing"
import { useCreatePost } from "../services/mutation"
import { usePosts } from "../services/queries"
import { Post } from "../types/post"
import NavBar from "../components/NavBar"

export default function UseMutationDemoPage() {
  const postsQuery = usePosts(5)
  const createPostMutation = useCreatePost()
  const { register, handleSubmit } = useForm<Post>()
  const handleCreatePostSubmit: SubmitHandler<Post> = (data) => {
    createPostMutation.mutate(data)
  }

  return (
    <>
      <NavBar title="Mutation Demo" />
      <BaseContainer>
        <div className="my-10 grid grid-cols-1 lg:grid-cols-2">
          <section className="mx-5 mb-6 lg:mb-0">
            <div className="flex flex-col">
              <h2 className="mb-4 text-2xl font-bold">UseMutation Demo</h2>
              <form onSubmit={handleSubmit(handleCreatePostSubmit)}>
                <input
                  className="mb-2 w-full rounded-md border border-gray-300 p-2 outline-none transition duration-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  placeholder="Title"
                  {...register("title")}
                />
                <input
                  className="mb-2 w-full rounded-md border border-gray-300 p-2 outline-none transition duration-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
                  placeholder="Body"
                  {...register("body")}
                />
                <input
                  className="rounded border border-amber-500 bg-transparent px-4 py-2 font-semibold text-amber-600 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-tr hover:from-teal-200 hover:to-amber-200 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={createPostMutation.isPending}
                  value={
                    createPostMutation.isPending ? "Submitting..." : "Add post"
                  }
                />
              </form>
            </div>
          </section>

          <section className="mx-5 mb-6">
            <div className="flex flex-col">
              <h2 className="mb-4 text-2xl font-bold">UseQuery Demo</h2>
              <PostListing postsQuery={postsQuery} />
            </div>
          </section>
        </div>
      </BaseContainer>
    </>
  )
}

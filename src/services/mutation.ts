import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createPost } from "./api"
import { Post } from "../types/post"

export function useCreatePost() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (post: Post) => createPost(post),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["postList"] })
    },
  })
}

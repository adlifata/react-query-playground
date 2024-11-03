import { useQueries, useQuery } from "@tanstack/react-query"
import { getComments, getPosts } from "./api"

export function usePosts(offset: number) {
  return useQuery({
    queryKey: ["postList"],
    queryFn: () => getPosts(offset),
  })
}

export function useComments(postId: number) {
  return useQuery(buildCommentsQueryConfig(postId))
}

export function useMultipleComments(postIds: number[] | undefined) {
  return useQueries({
    queries: (postIds ?? []).map((postId) => buildCommentsQueryConfig(postId)),
  })
}

// Helper
function buildCommentsQueryConfig(postId: number) {
  return {
    queryKey: ["commentList", postId],
    queryFn: () => getComments(postId),
  }
}

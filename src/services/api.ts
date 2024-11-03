import axios from "axios"
import { Post } from "../types/post"
import { PostComment } from "../types/comment"

const BASE_URL = "https://jsonplaceholder.typicode.com"
const axiosInstance = axios.create({ baseURL: BASE_URL })

export const getPosts = async (offset: number) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (await axiosInstance.get<Post[]>("/posts")).data.slice(0, offset)
}

export const createPost = async (post: Post) => {
  return (await axiosInstance.post<Post>("/posts", post)).data
}

export const getComments = async (postId: number) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  return (await axiosInstance.get<PostComment[]>("/comments?postId=" + postId))
    .data
}

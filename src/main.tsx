import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import ErrorPage from "./pages/ErrorPage"
import HomePage from "./pages/HomaPage"
import UseMutationDemoPage from "./pages/UseMutationDemoPage"
import UseQueryDemoPage from "./pages/UseQueryDemoPage"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 14_400_000, // 4 hours
    },
  },
})
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "useQueryDemo",
    element: <UseQueryDemoPage />,
  },
  {
    path: "useMutationDemo",
    element: <UseMutationDemoPage />,
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)

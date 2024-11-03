import { useNavigate } from "react-router-dom"
import BaseContainer from "../components/BaseContainer"
import Card from "../components/Card"

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-amber-100 to-teal-50">
      <BaseContainer className="mb-14">
        <h1 className="mb-4 text-center text-4xl font-bold">
          TanStack React Query Playground
        </h1>

        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
          <HomeCard
            title="useQuery Demo"
            desc="Learn how to fetch data using useQuery in React Query."
            onClick={() => {
              navigate("/useQueryDemo")
            }}
          />
          <HomeCard
            title="useMutation Demo"
            desc="Discover how to handle mutations with useMutation in React Query."
            onClick={() => {
              navigate("/useMutationDemo")
            }}
          />
          <HomeCard
            title="Pagination Demo"
            desc="Explore pagination techniques to manage large data sets."
            onClick={() => {}}
          />
          <HomeCard
            title="Lorem Ipsum"
            desc="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem"
            onClick={() => {}}
          />
        </div>
      </BaseContainer>
    </div>
  )
}

type HomeCardProp = {
  title: string
  desc: string
  onClick: () => void
}

const HomeCard: React.FC<HomeCardProp> = (props) => {
  return (
    <Card onClick={props.onClick}>
      <h2 className="mb-4 text-xl font-semibold">{props.title}</h2>
      <p className="text-gray-700">{props.desc}</p>
    </Card>
  )
}

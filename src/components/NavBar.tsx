import { useNavigate } from "react-router-dom"

type NavBarProps = {
  title: string
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const navigate = useNavigate()

  return (
    <nav className="relative flex items-center justify-between border-b-2 border-gray-100 p-4 shadow-md">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center justify-center rounded-full border-2 border-gray-200 p-2 text-black transition-colors duration-200 hover:border-amber-200 hover:bg-amber-100 hover:text-amber-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <h1 className="absolute left-1/2 -translate-x-1/2 transform text-xl font-bold">
        {props.title}
      </h1>
    </nav>
  )
}

export default NavBar

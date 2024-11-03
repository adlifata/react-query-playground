import { cn } from "../libs/utils"

type CardProp = {
  className?: String
  onClick?: () => void
}

const Card: React.FC<React.PropsWithChildren<CardProp>> = (props) => {
  return (
    <div
      className={cn(
        "transform cursor-pointer rounded-lg bg-white p-6 shadow-lg transition-all duration-300 hover:bg-gradient-to-tr hover:from-teal-200 hover:to-amber-200 hover:shadow-2xl active:shadow-lg",
        props.className
      )}
      onClick={props.onClick}
    >
      {props.children}
    </div>
  )
}

export default Card

import { cn } from "../libs/utils"

type BaseContainerProp = {
  className?: String
}

const BaseContainer: React.FC<React.PropsWithChildren<BaseContainerProp>> = (
  props
) => {
  return (
    <section
      className={cn(
        "mx-auto max-w-xl px-6 transition-all duration-300 md:max-w-5xl md:px-10 xl:max-w-[1300px]",
        props.className
      )}
    >
      {props.children}
    </section>
  )
}

export default BaseContainer

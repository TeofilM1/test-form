import { ComponentProps } from "@/interfaces/types"
import { JSX } from "react"

export const PageContainer: React.FC<ComponentProps> = ({
  children,
}): JSX.Element => {
  return <div>{children}</div>
}

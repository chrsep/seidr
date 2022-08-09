import { FC } from "react"
import clsx from "clsx"

const ErrorBox: FC<{
  errorText?: string
  className?: string
}> = ({ errorText, className }) => (
  <p
    className={clsx(
      "flex justify-center items-center h-8 text-sm text-center text-red-900 bg-red-100 rounded-lg transition-opacity",
      !errorText && "opacity-0",
      className
    )}
  >
    {errorText}
  </p>
)

export default ErrorBox

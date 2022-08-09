import { FC, ReactNode } from "react"
import clsx from "clsx"

const PRIMARY =
  "flex justify-center inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"

const OUTLINED =
  "flex justify-center inline-flex items-center px-3 py-2 border border-primary-500 text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-transparent hover:bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 text-primary-900"

const Button: FC<{
  variant?: "primary" | "outlined"
  className?: string
  type?: "button" | "submit" | "reset"
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
}> = ({
  type = "button",
  variant = "primary",
  className,
  children,
  disabled,
  onClick,
}) => (
  <button
    type={type}
    onClick={onClick}
    className={clsx(
      "disabled:opacity-50 transition-all disabled:cursor-not-allowed",
      className,
      variant === "primary" && PRIMARY,
      variant === "outlined" && OUTLINED
    )}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button

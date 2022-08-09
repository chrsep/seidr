import { ChangeEvent, FC } from "react"
import clsx from "clsx"

const TextField: FC<{
  name?: string
  type?: string
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  value: string
  placeholder?: string
  autoComplete?: string
  required?: boolean
  containerClassName?: string
  inputClassName?: string
  labelClassName?: string
}> = ({
  inputClassName,
  containerClassName,
  labelClassName,
  label,
  onChange,
  value,
  name,
  type = "text",
  placeholder,
  autoComplete,
  required,
}) => (
  <div className={containerClassName}>
    <label
      htmlFor="email"
      className={clsx(
        "block text-sm font-medium text-gray-700",
        labelClassName
      )}
    >
      {label}
    </label>
    <div className="mt-1">
      <input
        type={type}
        name={name}
        id={name}
        autoComplete={autoComplete}
        required={required}
        className={clsx(
          "block w-full bg-gray-50/50 rounded-md border-gray-300 focus:border-primary-500 focus:ring-primary-500 shadow-sm sm:text-sm",
          inputClassName
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
)

export default TextField

import { ChangeEvent, FC } from "react"
import clsx from "clsx"

const TextArea: FC<{
  name?: string
  type?: string
  label: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  value: string
  placeholder?: string
  autoComplete?: string
  required?: boolean
  containerClassName?: string
  textAreaClassName?: string
  labelClassName?: string
}> = ({
  containerClassName,
  labelClassName,
  label,
  onChange,
  value,
  name,
  placeholder,
  autoComplete,
  required,
  textAreaClassName,
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
      <textarea
        name={name}
        id={name}
        autoComplete={autoComplete}
        required={required}
        className={clsx(
          "block w-full rounded-md border-gray-300 bg-gray-50/50 focus:border-primary-500 focus:ring-primary-500 shadow-sm sm:text-sm",
          textAreaClassName
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  </div>
)

export default TextArea

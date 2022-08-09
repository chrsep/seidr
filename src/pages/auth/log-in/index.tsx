import { FormEventHandler, ReactNode, useState } from "react"
import { signIn } from "next-auth/react"
import Button from "$components/button"
import Image from "next/image"
import Logo from "$public/logo.ico"
import TextField from "$components/text-field"
import Link from "next/link"
import AuthLayout from "$layouts/auth-layout"
import { useRouter } from "next/router"
import Spinner from "$components/spinner"
import ErrorBox from "$components/error-box"

const Login = () => {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    const res = await signIn<"credentials">("credentials", {
      redirect: false,
      password,
      email,
    }).catch(() => {
      setLoading(false)
    })

    if (res?.ok) {
      await router.push("/")
    } else {
      if (res?.status === 401) {
        setError("Invalid email or password")
      }
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <div>
        <div className={"w-12 h-12"}>
          <Image
            className="w-auto"
            src={Logo}
            alt="Blog POC"
            layout={"responsive"}
          />
        </div>
        <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
          Log in to your account
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Or{" "}
          <Link href="/auth/sign-up">
            <a className="font-medium text-primary-600 hover:text-primary-500">
              Sign Up for an account
            </a>
          </Link>
        </p>
      </div>

      <div className="mt-8">
        <div className="mt-6">
          <form
            action="#"
            method="POST"
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            <div className="mt-1">
              <TextField
                label={"Email"}
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <TextField
              label={`Password`}
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <Button type="submit" className={"w-full"} disabled={loading}>
              {loading && <Spinner />}
              Log in
            </Button>

            <ErrorBox errorText={error} className={"!mt-3"} />
          </form>
        </div>
      </div>
    </div>
  )
}

Login.getLayout = (page: ReactNode) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default Login

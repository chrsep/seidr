import { FormEventHandler, ReactNode, useState } from "react"
import Button from "$components/button"
import Image from "next/image"
import Logo from "$public/logo.ico"
import TextField from "$components/text-field"
import Link from "next/link"
import AuthLayout from "$layouts/auth-layout"
import { signIn } from "next-auth/react"
import { useRouter } from "next/router"
import Spinner from "$components/spinner"
import ErrorBox from "$components/error-box"

const SignUp = () => {
  const router = useRouter()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // const signUpRes = await signUp({
      //   password,
      //   email,
      //   name,
      // })
      // if (signUpRes?.status !== 201) {
      //   setLoading(false)
      //   return
      // }

      await signIn("credentials", {
        redirect: false,
        password,
        email,
      })

      await router.push("/")
    } catch (e) {
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
          Sign up for an account
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Or{" "}
          <Link href={"/auth/log-in"}>
            <a className="font-medium text-primary-600 hover:text-primary-500">
              Log in to your existing account
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
            <TextField
              label={"Name"}
              name="name"
              autoComplete="full-name"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder={"Jane Smith"}
            />

            <TextField
              label={"Email"}
              name="email"
              type="email"
              autoComplete="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder={"jane@smith.com"}
            />

            <TextField
              label={`Password`}
              name="password"
              type="password"
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <div>
              <Button type="submit" className={"w-full"} disabled={loading}>
                {loading && <Spinner />}
                Sign up
              </Button>
            </div>

            {/*<ErrorBox errorText={error?.data.message} />*/}
          </form>
        </div>
      </div>
    </div>
  )
}

SignUp.getLayout = (page: ReactNode) => {
  return <AuthLayout>{page}</AuthLayout>
}

export default SignUp

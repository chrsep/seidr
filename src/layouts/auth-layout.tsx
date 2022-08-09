import Image from "next/image"
import SignInHero from "$public/images/log-in-hero.jpg"
import { FC, ReactNode } from "react"

const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <div className="flex min-h-full">
      <div className="flex flex-col flex-1 justify-center py-12 px-4 w-2/3 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        {children}
      </div>
      <div className="hidden relative w-0 lg:block lg:w-1/3 ">
        <Image
          className="object-cover absolute inset-0 w-full h-full "
          placeholder={"blur"}
          layout={"fill"}
          src={SignInHero}
          alt=""
        />
      </div>
    </div>
  </>
)

export default AuthLayout

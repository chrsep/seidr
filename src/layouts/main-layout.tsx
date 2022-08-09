import Image from "next/image"
import Logo from "$public/logo.ico"
import { FC, ReactNode } from "react"
import ActiveLink from "$components/active-link"
import Link from "next/link"

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="relative pb-32 min-h-screen bg-primary-50/40">
    <Header />
    {children}
  </div>
)

const Header = () => (
  <header className="sticky top-0 h-16 bg-white/90 border-b border-primary-100 backdrop-blur">
    <nav className={"flex items-center px-4 mx-auto max-w-7xl h-full"}>
      <Link href={"/"}>
        <a className={"flex  items-center mr-auto"}>
          <div className={"mr-4 w-6 h-6"}>
            <Image
              className="w-auto"
              src={Logo}
              alt="Blog POC"
              layout={"responsive"}
            />
          </div>

          <h1 className={"text-xl font-black"}>Blog</h1>
        </a>
      </Link>

      <NavLink href={"/"} text={"Home"} exact />
      <NavLink href={"/me/post"} text={"Your Profile"} />
    </nav>
  </header>
)

const NavLink: FC<{ exact?: boolean; text: string; href: string }> = ({
  text,
  href,
  exact,
}) => (
  <ActiveLink
    href={href}
    activeClassName="text-black border-primary-600 !text-primary-900"
    exact={exact}
  >
    <a className="flex justify-center items-center -mb-0.5 ml-8 h-full text-sm font-medium text-gray-500 hover:text-black border-b-2 border-transparent">
      {text}
    </a>
  </ActiveLink>
)

export default MainLayout

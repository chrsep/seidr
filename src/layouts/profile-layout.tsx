import ActiveLink from "$components/active-link"
import {
  DocumentAddIcon,
  LogoutIcon,
  UserAddIcon,
  UserGroupIcon,
} from "@heroicons/react/outline"
import { FC, ReactNode } from "react"

const ProfileLayout: FC<{
  children: ReactNode
  user: { name: string | null; email: string } | null
}> = ({ children, user }) => (
  <div className="grid grid-cols-12 gap-4 items-start px-4 mx-auto mt-6 max-w-7xl md:mt-8">
    <main className="overflow-hidden col-span-12 bg-white rounded-xl border border-primary-100 md:col-span-7 lg:col-span-8">
      {children}
    </main>

    <aside className="order-first col-span-12 bg-white rounded-xl border border-primary-100 md:order-last md:col-span-5 lg:col-span-4">
      <h2 className={"p-4 text-lg font-bold text-center"}>My Profile</h2>

      {user && (
        <div className={"flex px-4 text-sm border-b border-gray-200"}>
          <div className={"mx-auto mb-4 w-1/2"}>
            <p className={"mr-auto text-center text-gray-500"}>Name</p>
            <p className={"text-center"}>{user.name}</p>
          </div>

          <div className={"mx-auto mb-4 w-1/2"}>
            <p className={"mr-auto text-center text-gray-500"}>Email</p>
            <p className={"text-center"}>{user.email}</p>
          </div>
        </div>
      )}
      <div className={"my-2 text-sm"}>
        <ActiveLink
          href={"/me/post"}
          activeClassName={"border-l-2 border-primary-700 text-primary-900"}
        >
          <a className="flex items-center py-2 px-6 text-gray-900 border-l-2 border-transparent hover:bg-primary-50 transition-colors">
            <DocumentAddIcon className={"mr-4 w-5 h-5 "} />
            My posts
          </a>
        </ActiveLink>
        <ActiveLink
          href={"/me/follower"}
          activeClassName={"border-l-2 border-primary-700 text-primary-900"}
        >
          <a className="flex items-center py-2 px-6 text-gray-900 hover:bg-primary-50 border-l-2 border-transparent transition-colors">
            <UserGroupIcon className={"mr-4 w-5 h-5"} />
            Followers
          </a>
        </ActiveLink>
        <ActiveLink
          href={"/me/following"}
          activeClassName={"border-primary-700 text-primary-900"}
        >
          <a className="flex items-center py-2 px-6 text-gray-900 border-l-2 border-transparent hover:bg-primary-50 transition-colors">
            <UserAddIcon className={"mr-4 w-5 h-5"} />
            Following
          </a>
        </ActiveLink>

        <div className={"border-t my-2"} />

        <ActiveLink
          href={"/api/auth/signout"}
          activeClassName={"border-primary-700 text-primary-900"}
        >
          <a className="flex items-center py-2 px-6 text-gray-900 hover:bg-red-50 border-l-2 border-transparent transition-colors">
            <LogoutIcon className={"mr-4 w-5 h-5 text-red-600"} />
            Sign Out
          </a>
        </ActiveLink>
      </div>
    </aside>
  </div>
)

export default ProfileLayout

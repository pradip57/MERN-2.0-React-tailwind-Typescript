import { ReactNode } from "react"
import img1 from "../../../assets/react.svg"

const HeaderComponent = ():ReactNode  =>{

return(<>

<nav className="bg-gray-200">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1  items-center justify-center sm:items-stretch sm:justify-evenly">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={img1} alt="Your Company" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-5">
                  <a
                    href="#"
                    className="rounded-md bg-slate-300 px-3 py-2 text-lg font-medium text-black"
                    aria-current="page"
                  >
                    Category
                  </a>
                  <a
                    href="/team"
                    className="rounded-md px-3 py-2 text-lg font-medium text-black hover:bg-gray-700 hover:text-white"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-lg font-medium text-black hover:bg-gray-700 hover:text-white"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="rounded-md px-3 py-2 text-lg font-medium text-black hover:bg-gray-700 hover:text-white"
                  >
                    Company
                  </a>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-5">
                  <a
                    href="/auth/login"
                    className="rounded-md px-3 py-2 text-lg font-medium text-black hover:bg-gray-700 hover:text-white"
                  >
                    Log In
                  </a>
                  <a
                    href="/auth/register"
                    className="rounded-md px-3 py-2 text-lg font-medium text-black hover:bg-gray-700 hover:text-white"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-4 px-2 pb-3 pt-2">
            <a
              href="#"
              className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
              aria-current="page"
            >
              Category
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium  text-slate-700 hover:bg-gray-700 hover:text-white"
            >
              Features
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium  text-slate-700 hover:bg-gray-700 hover:text-white"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="block rounded-md px-3 py-2 text-base font-medium  text-slate-700 hover:bg-gray-700 hover:text-white"
            >
              Company
            </a>
          </div>
          <div className=" bg-lime-100 space-y-4 px-2 pb-3 pt-2">
            <a
              href="/auth/login"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700  hover:bg-gray-700 hover:text-white"
              aria-current="page"
            >
              Log In
            </a>
            <a
              href="/auth/register"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-gray-700 hover:text-white"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
</>)

}


export default HeaderComponent
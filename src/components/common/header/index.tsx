import { Fragment, useState, FC } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

const navigation = {
  pages: [
    { name: "Movies", href: "/movies" },
    { name: "Series", href: "/series" },
    { name: "Actors", href: "/actors" },
  ],
};

const Header: FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white">
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <NavLink
                        to={page.href}
                        onClick={() => setOpen(false)}
                        className={(navData) =>
                          classNames(
                            "-m-2 block p-2 font-medium text-gray-900",
                            {
                              ["text-indigo-600"]: navData.isActive,
                            }
                          )
                        }
                      >
                        {page.name}
                      </NavLink>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="ml-4 flex lg:ml-0">
                <a href="https://tailwindcss.com" target="_blank">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.href}
                      className={(navData) =>
                        classNames(
                          "flex items-center text-sm font-medium text-gray-700 hover:text-gray-800 border-b-2",
                          {
                            ["border-indigo-600 text-indigo-600"]:
                              navData.isActive,
                            ["border-transparent"]: !navData.isActive,
                          }
                        )
                      }
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </Popover.Group>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export { Header };

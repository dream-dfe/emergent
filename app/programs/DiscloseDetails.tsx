import { BsFillCheckCircleFill } from "react-icons/bs";
import { HiChevronDown } from "react-icons/hi";
import { Disclosure } from "@headlessui/react";

const DiscloseDetails = () => {
  return (
    <div className="w-full px-4 pt-6">
              <div className="mx-auto w-full  rounded-2xl bg-white p-2">
                <Disclosure>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full max-w-md justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                        <span>What is your refund policy?</span>
                        <HiChevronDown
                          className={`${
                            open ? "rotate-180 transform" : ""
                          } h-5 w-5 text-purple-500`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="px-4 pt-4 pb-2  ">
                        <ul className="max-w-md space-y-1 text-gray-700 list-inside ">
                          <li className="flex items-center">
                            <BsFillCheckCircleFill  className='mr-2 text-main-red' />
                            <span>xcbad</span>
                          </li>                         
                        </ul>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
            </div>
  )
}

export default DiscloseDetails
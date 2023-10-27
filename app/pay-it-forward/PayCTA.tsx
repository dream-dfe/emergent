import React from 'react'

const PayCTA = () => {
  return (
    <section className="bg-white ">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">Let&apos;s make an impact together.</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl ">For every entrepreneur impacted by our program we ask that they too pay-it-forward by empower through skills sharing and mentorship of at least 1 girl over a minimum of 2-week period.</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-700  ">
                    Get Involved
                </button>
                <a href="#" className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium
                 text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4
                  focus:ring-gray-100 ">
                    <svg className="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    View more
                </a>  
            </div>
        </div>
    </div>
</section>
  )
}

export default PayCTA
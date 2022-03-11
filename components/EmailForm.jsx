import Link from 'next/link'

export default function EmailForm() {
    return (
        <div className="mx-auto text-center px-10 mt-10 mb-20 py-5 border border-gray-600 -rotate-1 rounded-lg xs:w-2/3 sm:w-2/3 md:w-1/2 w-3/4">
          <h3 className="text-gray-300 font-bold mb-5">Subscribe below to get future posts from Krido Pambudi</h3>
          <form className="flex justify-center">
            <div className="border border-gray-700 rounded-full">
              <input type="email" placeholder="Type your email..." className="text-gray-300 bg-transparent mx-5 focus:outline-none text-sm rounded-l-full" disabled />
              {/* <button className="bg-gray-800 text-gray-300 px-2 py-1 rounded-r-full">Subscribe</button> */}
            </div>
          </form>
          <p className="text-gray-300 text-sm mt-5">
            Or grab the <Link href="/rss"><a className="underline">RSS feed</a></Link>
          </p>
        </div>
    )
}
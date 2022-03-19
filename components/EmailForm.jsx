import Link from "next/link";

export default function EmailForm() {
  return (
    <div className="text-md xs:w-2/3 mx-auto mt-10 mb-20 w-3/4 -rotate-1 rounded-md border border-gray-500 px-5 py-5 text-center shadow-md shadow-gray-600 sm:w-2/3 md:w-1/2">
      <h3 className="mb-5 pt-5 font-bold text-gray-300">
        Subscribe below to get future posts from Krido Pambudi
      </h3>
      <form className="flex justify-center sm:flex">
        <div className="rounded-full border border-gray-800">
          <input
            type="email"
            placeholder="Type ur email..."
            className="bg-transparent px-5 py-2 focus:outline-none"
            disabled
          />
          {/* <button
            className="bg-gray-900 text-gray-300 px-2 py-1 rounded-r-full"
            disabled
          >
            subscribe
          </button> */}
        </div>
      </form>
      <p className="my-5">
        Or grab the{" "}
        <Link href="/feed">
          <a className="text-pink-500 underline">RSS feed</a>
        </Link>
      </p>
    </div>
  );
}

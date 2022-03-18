import Link from "next/link";

export default function EmailForm() {
  return (
    <div className="__mono mx-auto text-center mt-10 mb-20 py-5 border border-gray-500 -rotate-1 rounded-lg xs:w-2/3 sm:w-2/3 md:w-1/2 w-3/4">
      <h3 className="text-gray-300 font-bold mb-5">
        Subscribe below to get future posts from Krido
      </h3>
      <form className="flex justify-center">
        <div className="border border-gray-800 rounded-full">
          <input
            type="email"
            placeholder="type ur email..."
            className="bg-transparent px-5 focus:outline-none text-sm"
            disabled
          />
          <button
            className="bg-gray-900 text-gray-300 px-2 py-1 rounded-r-full"
            disabled
          >
            subscribe
          </button>
        </div>
      </form>
      <p className="text-sm mt-5">
        Or grab the{" "}
        <Link href="/feed">
          <a className="__orange underline">RSS feed</a>
        </Link>
      </p>
    </div>
  );
}

import Link from "next/link";

export default function EmailForm() {
  return (
    <div className="text-md xs:w-2/3 mx-auto mt-10 mb-20 w-5/6 -rotate-1 rounded-lg border-2 border-gray-400 px-5 py-5 text-center text-lg font-bold text-gray-400 sm:w-2/3">
      <h3 className="my-5 font-basement">
        anyway, you can subscribe to get future posts from Krido
      </h3>
      <form className="flex justify-center sm:flex">
        <div className="rounded-full border-2 border-white">
          <input
            type="email"
            placeholder="type your email..."
            className="bg-transparent px-5 py-2 focus:outline-none"
            disabled
          />
        </div>
      </form>
      <p className="my-5">
        or grab the{" "}
        <Link href="/feed.xml">
          <a className="text-fuchsia-500 underline">RSS feed</a>
        </Link>
      </p>
    </div>
  );
}

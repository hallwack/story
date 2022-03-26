import Link from "next/link";

export default function Footer() {
  return (
    <div className="__mono mt-20 mb-5 items-center justify-center text-center text-xl italic">
      <footer>
        thank you for coming to my{" "}
        <Link href="https://github.com/yuxxeun/story">
          <a className="font-semibold text-orange-500 hover:underline">story</a>
        </Link>
      </footer>
    </div>
  );
}

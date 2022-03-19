import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <>
      <div className="mt-5 pb-5 text-center focus:outline-none">
        <Link href="/">
          <a>
            <Image
              src="/krido.jpg"
              alt="avatar"
              className="rounded-full"
              height={130}
              width={130}
              blurDataURL="/krido.jpg"
            />
          </a>
        </Link>
        <h1 className="pt-5 text-2xl font-extrabold uppercase tracking-widest text-pink-500">
          krido pambudi
        </h1>
      </div>
    </>
  );
}

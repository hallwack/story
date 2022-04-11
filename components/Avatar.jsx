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
              height={150}
              width={150}
              blurDataURL="/krido.jpg"
            />
          </a>
        </Link>
        <h1 className="pt-5 text-2xl font-extrabold uppercase tracking-widest text-fuchsia-500">
          krido
        </h1>
      </div>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  return (
    <>
      <div className="text-center mt-5 pb-5 focus:outline-none">
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
        <h1 className="uppercase __orange pt-5 text-2xl tracking-widest font-extrabold">
          krido pambudi
        </h1>
      </div>
    </>
  );
}

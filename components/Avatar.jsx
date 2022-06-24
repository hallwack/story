import Image from "next/image";

const name = "krido pambudi";

export default function Avatar() {
  return (
    <>
      <div className="xs:w-2/3 mx-auto mt-5 w-5/6 items-center pb-5 text-center focus:outline-none"
	    data-aos="fade-up"
    	    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
        <div>
          <Image
            className="rounded-full"
            src="/krido.jpg"
            alt="avatar"
            width={200}
            height={200}
            priority
            blurDataURL="/krido.jpg"
          />
          <h1 className="mt-5 text-center font-basement text-2xl font-extrabold uppercase tracking-wide text-slate-700">
            {name}
          </h1>
        </div>
      </div>
    </>
  );
}

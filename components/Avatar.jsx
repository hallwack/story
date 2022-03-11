import Image from 'next/image'
import Link from 'next/link'

export default function Avatar() {
    return (
        <>
            <div className="text-center mt-5 pb-10 focus:outline-none">
                <Link href="/">
                    <a>
                        <Image src="/krido.jpg" alt="avatar" className="rounded-full" height={130} width={130} blurDataURL="/krido.jpg" />
                    </a>
                </Link>
                <h1 className="text-gray-400 capitalize pt-5 text-xl tracking-widest"> KRIDO PAMBUDI </h1>
            </div>
        </>
    )
}
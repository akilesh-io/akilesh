import Image from "next/image"
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
                <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
                    <div className="relative">
                        <div className="absolute">
                            <div className="">
                                <h1 className="my-2 text-gray-800 font-bold text-2xl">
                                    Looks like you&#39;ve found the
                                    doorway to the great nothing
                                </h1>
                                <p className="my-2 text-gray-800">Sorry about that! Please visit my hompage to get where you need to go.</p>
                                <Link href='/'>
                                    <a>
                                        <button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">Take me there!</button>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/davkfrmah/image/upload/v1684478940/Akilesh/404.png" alt="404" />
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block lg:w-1/2 relative">
                    {/* <Image src={me} /> */}
                    <img src="https://res.cloudinary.com/davkfrmah/image/upload/v1684478941/Akilesh/Group.png" alt="Group" />
                </div>
            </div>
        </>
    )
}
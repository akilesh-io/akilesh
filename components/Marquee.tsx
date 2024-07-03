"use client";

const StarSvg = () => (
    <svg
        className="mx-2 h-8 w-8 inline-block"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L10.6985 7.20599C10.4445 8.22185 10.3176 8.72978 10.0531 9.14309C9.81915 9.50868 9.50868 9.81915 9.14309 10.0531C8.72978 10.3176 8.22185 10.4445 7.20599 10.6985L2 12L7.20599 13.3015C8.22185 13.5555 8.72978 13.6824 9.14309 13.9469C9.50868 14.1808 9.81915 14.4913 10.0531 14.8569C10.3176 15.2702 10.4445 15.7782 10.6985 16.794L12 22L13.3015 16.794C13.5555 15.7782 13.6824 15.2702 13.9469 14.8569C14.1808 14.4913 14.4913 14.1808 14.8569 13.9469C15.2702 13.6824 15.7782 13.5555 16.794 13.3015L22 12L16.794 10.6985C15.7782 10.4445 15.2702 10.3176 14.8569 10.0531C14.4913 9.81915 14.1808 9.50868 13.9469 9.14309C13.6824 8.72978 13.5555 8.22185 13.3015 7.20599L12 2Z" />
    </svg>
);


export default function Marquee() {
    return (
        <>
            <div className="relative flex justify-center items-center h-36">

                <div className="relative flex overflow-x-hidden rotate-6 bg-[#e8e5f0] text-gray-900">
                    <div className="flex items-center border-t-4 border-b-4 py-2 animate-marquee whitespace-nowrap">
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                    </div>

                    <div className="flex items-center border-t-4 border-b-4 absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                        <span className="text-4xl mx-14">akilesh io</span>
                        <StarSvg />
                    </div>
                </div>


                <div className="absolute inset-0 flex justify-center items-center z-10">


                    <div className="relative flex overflow-x-hidden -rotate-6 bg-[#e8e5f0] dark:bg-[#0e1012] dark:shadow-md">
                        <div className="flex items-center border-t-4 border-b-4 py-2 animate-marquee whitespace-nowrap dark:border-[#0e1012]">
                            <span className="text-4xl mx-14">Complete Website</span>
                            <StarSvg />
                            <span className="text-4xl mx-14">Landing Page</span>
                            <StarSvg />
                            <span className="text-4xl mx-14">Web Apps</span>
                            <StarSvg />
                            <span className="text-4xl mx-14">Mobile Apps</span>
                            <StarSvg />
                            <span className="text-4xl mx-14">E-commerce</span>
                            <StarSvg />
                        </div>

                        <div className="flex items-center border-t-4 border-b-4  absolute top-0 py-2 animate-marquee2 whitespace-nowrap dark:border-[#0e1012]">
                            <span className="text-4xl mx-14">Complete Website</span>
                            <StarSvg />
                            <span className="text-4xl mx-14">Landing Page</span>
                            <StarSvg />
                            <span className="text-4xl mx-14">Web Apps</span>
                            <StarSvg />
                            <span className="text-4xl mx-14">Mobile Apps</span>
                            <StarSvg />
                            <span className="text-4xl mx-14">E-commerce</span>
                            <StarSvg />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

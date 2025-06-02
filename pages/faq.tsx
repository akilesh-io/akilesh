import Link from "next/link";
import Layout from "layout/Layout";
import { useMemo } from 'react';
import Marquee from "@/components/Marquee";

const pricingData = [
    {
        category: "Hourly Rate",
        minPrice: 30,
        // maxPrice: 30,
        description: "For on-demand development support"
    },
    {
        category: "E-commerce",
        minPrice: 500,
        maxPrice: 8000,
        description: "Full-featured online stores and marketplaces"
    },
    {
        category: "Web Development",
        minPrice: 1350,
        maxPrice: 3000,
        description: "High-converting landing pages and web applications"
    },
    {
        category: "Mobile App Development",
        minPrice: 3000,
        maxPrice: 5000,
        description: "Native and cross-platform mobile applications"
    }
];

const getMonthlyPromo = () => {
    const month = new Date().getMonth();
    const promos = [
        "🎉 New Year Special: Kickstart your project with premium support",
        "💝 February Flash: Book now for Valentine's season launches",
        "🌱 Spring Forward: Early bird pricing for Q2 projects",
        "🚀 April Boost: Get development fast-tracked this month",
        "🎯 May Special: Lock in premium development slots now",
        "☀️ Summer Launch: Get your project live before peak season",
        "🎆 July Premium: Mid-year project acceleration available",
        "🔥 August Heat: Hot deals on development packages",
        "📚 September Start: Back-to-business development boost",
        "🎃 October Deal: Secure holiday season development slots",
        "⭐ November Now: Get live before the holiday rush",
        "🎄 December Dash: Last chance for year-end launches"
    ];
    return promos[month];
};


export default function FAQ() {
    return (
        <Layout>
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Pricing & FAQ
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Transparent pricing structure for different services. Please note that these are estimated ranges and final quotes may vary based on project requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
                    {pricingData.map((item, index) => (
                        <div
                            key={index}
                            className="p-4 sm:p-6 rounded-2xl border-2 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.category}</h3>
                            <div className="flex items-baseline gap-2 mb-3">
                                <span className="text-2xl sm:text-3xl font-bold">${item.minPrice}</span>
                                <span className="text-2xl sm:text-3xl font-bold">
                                    {item.maxPrice ? ` - ${item.maxPrice}` : ''}
                                </span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{item.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-gradient-to-b from-transparent to-gray-50 dark:to-gray-900/50 py-12 px-4 rounded-3xl">
                    <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        Ready to Transform Your Ideas into Reality?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                        Don't just dream about your next big project. Let's build something extraordinary together.
                        Get a <span className="font-semibold text-black dark:text-white">free consultation</span> and see how we can bring your vision to life.
                    </p>
                    <div className="space-y-4">
                        <Link
                            href="/work?form=active"
                            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white bg-black dark:bg-white dark:text-black rounded-full overflow-hidden transition-all duration-300 hover:scale-105 transform"
                        >
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-purple-600 rounded-full group-hover:w-[300px] group-hover:h-[300px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 -z-1"></span>
                            <span className="relative z-10 flex items-center">
                                Start Your Project Now
                                <svg className="w-5 h-5 ml-2 -mr-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                        {/* In your FAQ component, replace the static promo text with: */}
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            {/* Random if else condition */}
                            {Math.floor(Math.random() * 100) % 2 === 0 ? "🚀 Limited time offer: Get priority scheduling for projects started this month" : getMonthlyPromo()}
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-16">
                <Marquee />
            </div>

        </Layout>
    );
}




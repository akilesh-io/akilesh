import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'


import logo from '../public/svg/logo.svg';

export const Navbar = () => {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    return (
        <>
            <div className='container max-w-5xl mx-auto'>
                <nav className='flex items-center flex-wrap bg-slate-100 p-3 lg:p-0 '>
                    <Link href='/'>
                        <a className='inline-flex items-center p-1 mr-4 lg:p-0'>
                            <Image src={logo} alt="logo" />
                        </a>
                    </Link>


                    <div className='group ml-auto'>
                        <button
                            className='inline-flex p-3 group-hover:bg-cyan-900 rounded lg:hidden text-white hover:text-white outline-none'
                            onClick={handleClick}
                        >
                            <svg
                                className='w-6 h-6 text-cyan-900 group-hover:text-white'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M4 6h16M4 12h16M4 18h16'
                                />
                            </svg>
                        </button>
                    </div>


                    {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
                    <div
                        className={`${active ? '' : 'hidden'
                            }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
                    >

                        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto pt-6 lg:pt-0 lg:mr-5'>
                            {/* navigate to blog.akilesh.io */}
                            <Link href='https://blog.akilesh.io/'>
                                <a className='lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center hover:bg-white  '>
                                    Blog
                                </a>
                            </Link>
                            <Link href='/work'>
                                <a className='lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center hover:bg-white '>
                                    Work
                                </a>
                            </Link>
                            <Link href="mailto:2112akilesh@gmail.com">
                                <a className='lg:inline-flex lg:w-auto lg:mr-5 w-full px-3 py-2 rounded text-gray-700 font-bold items-center justify-center hover:bg-white '>
                                    Contact
                                </a>
                            </Link>        
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};  
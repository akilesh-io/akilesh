import React, { useState, useCallback, useRef } from "react";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalTrigger,
} from "../ui/animated-modal";

import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

export function Form() {


    const services = [
        "Website",
        "E-Commerce",
        "Redesign",
        "Visual Identity",
        "Web app",
        "Mobile app",
        "On-going support",
        "App from scratch",
    ];
    const buttonRef = useRef<HTMLButtonElement>(null);
    const formRef = useRef<HTMLFormElement>(null);
    const [selectedButtons, setSelectedButtons] = useState<string[]>([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [budget, setBudget] = useState<number | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [dragActive, setDragActive] = useState(false);
    const [message, setMessage] = useState('');
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            setFile(files[0]);
            setFileName(files[0].name);
        }
    }, []);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setFile(files[0]);
            setFileName(files[0].name);
        }
    }, []);

    const handleButtonClick = (value: string) => {
        setSelectedButtons(prevSelected =>
            prevSelected.includes(value)
                ? prevSelected.filter(item => item !== value)
                : [...prevSelected, value]
        );
    };

    const sendEmail = (formElement) => {

        emailjs
            .sendForm('service_a3gos4i', 'template_7wlewzm', formElement, {
                publicKey: 'ezWzrBdfQ3YVZ9ied',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    const handleUpload = async (file: File) => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const { url: uploadUrl, key: uuid } = await response.json()

            await fetch(uploadUrl, { method: 'PUT', body: file })

            return `https://pub-f96ad99aa1e04a5c9569f0d3718414f2.r2.dev/${uuid}`;

        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);
        const formElement = formRef.current;


        let fileUrl = null;
        if (file) {
            fileUrl = await handleUpload(file);
        }
        const services = selectedButtons.map(button => ({ name: button }));


        const data = {
            services: services,
            firstName,
            lastName,
            email,
            budget,
            message,
            fileUrl,
        };

        await fetch('/api/notion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (response.ok) {
                    toast.success('Your inquiry has been sent!');
                    sendEmail(formElement);
                } else {
                    toast.error('Failed to send inquiry. Please try again.');
                }
            })
            .catch(error => {
                toast.error('An error occurred while sending the inquiry. Please try again.');
            });

        setLoading(false);
        if (buttonRef.current) {
            buttonRef.current.click();
        }
    };

    return (
        <>
            <Modal>
                <ModalTrigger className="relative inline-block text-lg group">
                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative font-semibold">Start Your Project</span>
                    </span>
                    <span
                        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                        data-rounded="rounded-lg"
                    ></span>
                </ModalTrigger>
                <ModalBody>
                    <ModalContent>
                        <h4 className="text-2xl md:text-4xl text-mild dark:text-white font-semibold text-center mb-8">
                            Let&lsquo;s get your{" "}
                            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-mild dark:border-mild border border-gray-200">
                                project started
                            </span>{" "}
                        </h4>
                        <div className="flex justify-center items-center">
                            <div className="max-w-4xl w-full p-8">
                                <h1 className="text-3xl font-semibold mb-8">
                                    Services you&lsquo;re interested in
                                </h1>

                                <div className="w-full max-w-6xl mb-8">
                                    {services.map((services, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            className={`m-1 sm:m-2 py-1 px-3 sm:py-3 sm:px-6 border-2 border-mild dark:border-white rounded-full transition whitespace-nowrap text-base sm:text-xl font-semibold sm:font-medium ${selectedButtons.includes(services)
                                                ? 'bg-black text-white dark:bg-white dark:text-black'
                                                : 'hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
                                                }`}
                                            onClick={() => handleButtonClick(services)}
                                        >
                                            {services}
                                        </button>
                                    ))}
                                </div>
                                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <input
                                            required
                                            type="text"
                                            placeholder="First name*"
                                            onChange={e => setFirstName(e.target.value)}
                                            className="w-full pt-3 pb-1 bg-transparent border-b-2 border-mild dark:border-white focus:outline-none text-2xl font-medium"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last name"
                                            onChange={e => setLastName(e.target.value)}
                                            className="w-full pt-3 pb-1 bg-transparent border-b-2 border-mild dark:border-white focus:outline-none text-2xl font-medium"
                                        />
                                        <input
                                            required
                                            type="email"
                                            placeholder="Email*"
                                            onChange={e => setEmail(e.target.value)}
                                            className="w-full pt-3 pb-1 bg-transparent border-b-2 border-mild dark:border-white focus:outline-none text-2xl font-medium"
                                        />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        <div>
                                            <input
                                                type="text"
                                                placeholder="Budget ($)"
                                                onChange={e => setBudget(Number(e.target.value))}
                                                className="w-full pt-3 pb-1 bg-transparent border-b-2 border-mild dark:border-white focus:outline-none text-2xl font-medium"
                                            />
                                            <div className="text-gray-400 text-sm mt-2">
                                                More info on minimum/typical budget sizes can be found{' '}
                                                <a href="/faq" className="underline">
                                                    here
                                                </a>
                                                .
                                            </div>
                                        </div>

                                        <div
                                            className={`mb-4 md:col-span-2  ${dragActive ? 'border-blue-500 border-2 border-dashed' : ''}`}
                                            onDragEnter={handleDrag}
                                            onDragLeave={handleDrag}
                                            onDragOver={handleDrag}
                                            onDrop={handleDrop}
                                        >
                                            <input type="file" id="file-upload" className="hidden" onChange={handleChange} />
                                            <label htmlFor="file-upload" className="text-gray-400 cursor-pointer flex items-center">
                                                <span className="sr-only">Attach files</span>
                                                <div className="flex items-center w-full pt-3 pb-1 bg-transparent border-b-2 border-mild dark:border-white focus:outline-none text-2xl font-medium">
                                                    <svg
                                                        className="w-6 h-6 mr-2"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L18 9.828M18 13V7h-6"
                                                        />
                                                    </svg>
                                                    {dragActive ? 'Drop here' : fileName ? fileName : 'Attach files'}
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    <textarea
                                        placeholder="Tell me more about your project"
                                        className="w-full pt-3 pb-1 bg-transparent border-b-2 border-mild dark:border-white focus:outline-none text-2xl font-medium"
                                        onChange={e => setMessage(e.target.value)}
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="mt-8 py-3 px-6 bg-mild dark:bg-white dark:text-black text-white rounded-full hover:bg-gray-200 transition flex items-center justify-center font-semibold dark:hover:bg-black dark:hover:text-white border-2 border-mild dark:border-white hover:text-mild"
                                    >
                                        {loading ? (
                                            <span className="flex items-center">
                                                <svg
                                                    className="animate-spin h-5 w-5 mr-3"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8v8H4z"
                                                    ></path>
                                                </svg>
                                                Loading...
                                            </span>
                                        ) : (
                                            <>
                                                Send Inquiry
                                                <span className="ml-2">
                                                    <svg
                                                        className="w-5 h-5"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M5 12h14M12 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </span>
                                            </>
                                        )}
                                    </button>
                                    <ModalTrigger>
                                        <button
                                            ref={buttonRef}
                                            className="hidden"
                                        >
                                            sad
                                        </button>
                                    </ModalTrigger>
                                </form>
                            </div>
                        </div>
                    </ModalContent>
                </ModalBody>
            </Modal>
        </>
    );
}

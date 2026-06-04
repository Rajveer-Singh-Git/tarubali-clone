import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const productsFaqs = [
    { id: 1, question: "What makes Taru Bali products unique?" },
    { id: 2, question: "Are your products made with natural ingredients?" },
    { id: 3, question: "Are your products safe for sensitive skin?" },
    { id: 4, question: "Are your products vegan and cruelty-free?" },
    { id: 5, question: "Where are the products manufactured?" },
    { id: 6, question: "How are your products scented?" },
    { id: 7, question: "How long do your products last?" },
    { id: 8, question: "Will you be making more products?" }
];

const partnershipFaqs = [
    { id: 1, question: "Do you offer distributor partnerships?" },
    { id: 2, question: "What are the requirements to become a Taru Bali partner?" },
    { id: 3, question: "Do you provide marketing materials to partners?" },
    { id: 4, question: "Do partners receive wholesale pricing?" },
    { id: 5, question: "Can we sell Taru Bali products online?" },
    { id: 6, question: "Do you support logistics?" }
];

export default function FAQ() {
    const [activeTab, setActiveTab] = useState('products');
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const listRef = useRef(null);
    const footerRef = useRef(null);

    const currentFaqs = activeTab === 'products' ? productsFaqs : partnershipFaqs;

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo(headerRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )
            .fromTo(listRef.current,
                { y: 40, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                "-=0.4"
            )
            .fromTo(footerRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5 },
                "-=0.2"
            );
    }, { scope: sectionRef });

    useGSAP(() => {
        gsap.fromTo(listRef.current.children,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
        );
    }, { dependencies: [activeTab], scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 md:py-32 px-6 md:px-12 bg-transparent"
        >
            <div className="max-w-[1300px] mx-auto">

                <div
                    ref={headerRef}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-8"
                >
                    <h2 className="text-[#053801] text-4xl md:text-5xl lg:text-[40px] font-bold leading-[0.95] cormorant-garamond-rvs uppercase">
                        FREQUENTLY ASKED <br />
                        QUESTIONS
                    </h2>

                    <div className="flex flex-row w-full md:w-auto border-b-[2px] border-gray-300">
                        <button
                            onClick={() => setActiveTab('products')}
                            className={`flex-1 md:flex-none pb-3 px-2 md:px-6 text-[11px] md:text-xs font-bold uppercase border-b-[2px] -mb-[2px] transition-all duration-300 ${activeTab === 'products'
                                ? 'border-[#193826] text-[#193826]'
                                : 'border-transparent text-[#2c3e2e]/60 hover:text-[#193826]'
                                }`}
                        >
                            Products
                        </button>
                        <button
                            onClick={() => setActiveTab('partnership')}
                            className={`flex-1 md:flex-none pb-3 px-2 md:px-6 text-[11px] md:text-xs font-bold uppercase border-b-[2px] -mb-[2px] transition-all duration-300 ${activeTab === 'partnership'
                                ? 'border-[#193826] text-[#193826]'
                                : 'border-transparent text-[#2c3e2e]/60 hover:text-[#193826]'
                                }`}
                        >
                            Partnership
                        </button>
                    </div>
                </div>

                <div
                    ref={listRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 mb-10"
                >
                    {currentFaqs.map((faq) => (
                        <button
                            key={faq.id}
                            className="w-full bg-transparent border border-[#2c3e2e] rounded-xl md:rounded-2xl px-5 md:px-7 py-4 md:py-3 flex justify-between items-center text-left group transition-colors duration-300 hover:bg-[#8C7046]/5"
                        >
                            <span className="text-[#2c3e2e] text-[15px] md:text-[17px] font-medium pr-4">
                                {faq.question}
                            </span>

                            <svg
                                className="w-5 h-5 text-[#2c3e2e] opacity-70 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="9 18 15 12 9 6"></polyline>
                            </svg>
                        </button>
                    ))}
                </div>

                <div ref={footerRef}>
                    <p className="text-[#2c3e2e] text-sm md:text-[15px] font-medium">
                        Have a specific question?{' '}
                        <a
                            href="#"
                            className="font-bold border-b-[1.5px] border-[#2c3e2e] pb-0.5 transition-colors hover:text-[#8C7046] hover:border-[#8C7046]"
                        >
                            Contact us
                        </a>
                    </p>
                </div>

            </div>
        </section>
    );
}
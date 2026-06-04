import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const principlesData = [
    {
        title: "HERBAL EXTRACTS",
        desc: "A mindful blend of traditional botanicals, carefully selected to reflect Bali's heritage of care.",

        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 mb-6 text-[#053801]">
                <path d="M12 2v4M12 6a2 2 0 00-2 2v8a2 2 0 004 0V8a2 2 0 00-2-2zM9 16c-3.314 0-6-2.686-6-6 0-3.314 2.686-6 6-6M15 16c3.314 0 6-2.686 6-6 0-3.314-2.686-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 14s1.5 4 4 4 2-2 2-2-4-5-6-2z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "MULTI-PURPOSE USE",
        desc: "Suitable for daily body massage, skincare and self-care rituals.",

        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 mb-6 text-[#053801]">
                <path d="M12 2v20M2 12h20M12 2l-3 3M12 2l3 3M12 22l-3-3M12 22l3-3M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "BALINESE HERITAGE",
        desc: "Inspired by Bali's artisanal methods and cultural traditions, brought into modern self care.",

        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="w-12 h-12 mb-6 text-[#053801]">
                <path d="M6 22V10l3-3v15M18 22V10l-3-3v15M3 22h18M6 14H4M6 18H4M18 14h2M18 18h2M9 7h6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "CLEAN & PURE FORMULA",
        desc: "Crafted without unnecessary additives, and made with natural botanicals for a simple, gentle formulation.",

        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 mb-6 text-[#053801]">
                <path d="M12 22C6.477 22 2 17.523 2 12S12 2 12 2s10 4.477 10 10-4.477 10-10 10z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 22c0-4-3-7-3-7s3 1 6 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    },
    {
        title: "MOISTURIZING CARE",
        desc: "Helps the skin feel soft and smooth, while leaving a pleasant botanical balance.",

        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="w-12 h-12 mb-6 text-[#053801]">
                <path d="M12 2c0 0-4 4-4 8a4 4 0 008 0c0-4-4-8-4-8z" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 18c2 2 5 2 6 2s4-1 6-3c0 0-1-1-3-1s-4 2-6 2-3-1-3-1z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        )
    }
];

export default function Principles() {
    const containerRef = useRef(null);
    const headingRef = useRef(null);


    const itemRefs = useRef([]);
    itemRefs.current = [];

    const addToRefs = (el) => {
        if (el && !itemRefs.current.includes(el)) {
            itemRefs.current.push(el);
        }
    };

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            }
        });

        tl.from(headingRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
        })

            .from(itemRefs.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: 'power3.out',
            }, '-=0.5');

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="w-full py-24 md:py-32 px-6 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-20 md:mb-28" ref={headingRef}>
                    <h2 className="text-[#053801] text-4xl md:text-5xl lg:text-[35px] leading-[1.2] cormorant-garamond-rvs uppercase font-bold">
                        Our Botanical Oil Carries <br className="hidden md:block" />
                        Five Key Principles:
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-x-12 gap-y-16 md:gap-y-24">
                    {principlesData.map((principle, index) => (
                        <div
                            key={index}
                            ref={addToRefs}

                            className="flex flex-col items-center text-center w-full sm:w-[45%] lg:w-[28%]"
                        >

                            {principle.icon}

                            <h3 className="text-[#053801] text-sm md:text-xs font-bold uppercase mb-4">
                                {principle.title}
                            </h3>

                            <p className="text-[#2c3e2e] text-sm md:text-sm opacity-90 max-w-[280px]">
                                {principle.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
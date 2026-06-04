import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import heroImage from "../assets/tarubali.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Ritual() {
    const containerRef = useRef(null);
    const headingRef = useRef(null);
    const textBlockRef = useRef(null);
    const bottleRef = useRef(null);

    useGSAP(() => {

        gsap.from([headingRef.current, textBlockRef.current], {
            y: 50,
            opacity: 0,
            duration: 1.2,
            stagger: 0.3,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
            }
        });

        gsap.fromTo(bottleRef.current,
            {
                yPercent: -30,
                rotation: 110,
            },
            {
                yPercent: 30,
                rotation: 145,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                }
            }
        );

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full py-24 md:py-40 px-6 md:px-16 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative">

                <div className="relative z-10 w-full md:w-1/2" ref={headingRef}>
                    <h2 className="text-[#053801] text-5xl md:text-6xl lg:text-[80px] leading-[1.1] cormorant-garamond-rvs uppercase font-bold tracking-wide">
                        A Ritual Rooted In Nature.<br />
                    </h2>
                </div>

                <div
                    ref={bottleRef}
                    className="relative md:absolute w-[120px] sm:w-[150px] md:w-[200px] lg:w-[100px] my-10 md:my-0 mx-auto md:mx-0 z-0
                               md:top-[25%] md:left-[40%] lg:left-[42%] pointer-events-none"
                >
                    <img
                        src={heroImage}
                        alt="Tarubali Bottle"
                        className="w-full h-auto drop-shadow-2xl"
                    />
                </div>

                <div
                    ref={textBlockRef}
                    className="relative z-10 w-full md:w-1/2 lg:w-[45%] md:ml-auto md:mt-[20vh] lg:mt-[30vh] text-[#2c3e2e] cormorant-garamond-rvs font-semibold"
                >
                    <p className="text-base md:text-lg leading-relaxed mb-8">
                        Inspired by <strong>Bali's botanical heritage</strong> and <strong>artisanal traditions</strong>, Taru Bali is a cosmetic body care brand focused on thoughtful formulation as our products are developed with plant-based ingredients, including <strong>coconut oil</strong> and a carefully <strong>selected blend of botanical extracts</strong>, and are produced in Bali in accordance with established cosmetic manufacturing standards.
                    </p>

                    <h3 className="font-bold text-lg md:text-xl text-[#053801] mb-4">
                        Some ingredients include:
                    </h3>

                    <ul className="space-y-3 mb-10 text-base md:text-lg">
                        <li className="flex items-start">
                            <span className="mr-2 text-[#8C7046]">•</span>
                            <span><strong>Turmeric</strong> <span className="italic">(traditionally valued botanical ingredients)</span></span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2 text-[#8C7046]">•</span>
                            <span><strong>Red Ginger</strong> <span className="italic">(aromatic botanical extract)</span></span>
                        </li>
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-[#193826] text-[#E4B856] px-8 py-3 font-semibold transition-colors duration-300 hover:bg-[#8C7046] hover:text-[#193826] rounded-2xl">
                            See Products
                        </button>
                        <button className="bg-[#193826] text-[#E4B856] px-8 py-3 font-semibold transition-colors duration-300 hover:bg-[#8C7046] hover:text-[#193826] rounded-2xl">
                            Ingredients Benefits
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
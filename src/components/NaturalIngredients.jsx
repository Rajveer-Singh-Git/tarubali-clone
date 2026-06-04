import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroImage from "../assets/tarubali.webp";

gsap.registerPlugin(ScrollTrigger);

export default function TaruBaliSection() {
    const containerRef = useRef(null);
    const wavePathRef = useRef(null);
    const section2Ref = useRef(null);
    const mapPath1 = useRef(null);
    const mapPath2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.to(wavePathRef.current, {
                attr: { d: "M 0 200 Q 600 200 1200 200 L 1200 200 L 0 200 Z" },
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "vmax top+=400",
                    scrub: 0.5,
                }
            });

            gsap.fromTo([mapPath1.current, mapPath2.current],
                { strokeDashoffset: 1000, strokeDasharray: 1000 },
                {
                    strokeDashoffset: 0,
                    ease: "power3.out",
                    duration: 4,
                    scrollTrigger: {
                        trigger: section2Ref.current,
                        start: "top center",
                        end: "center center",
                        scrub: true,
                    }
                }
            );

            gsap.from('.fade-in-text', {
                opacity: 0,
                y: 40,
                stagger: 0.25,
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.ingredients-section',
                    start: 'top 60%',
                    toggleActions: 'play none none reverse',
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full bg-[#1b3323] overflow-hidden text-white font-sans mt-[-3%]">

            <section className="relative h-screen w-full bg-[#f5f0e6] -mt-80 flex flex-col justify-center overflow-hidden">

                <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20 pointer-events-none">
                    <svg
                        viewBox="0 0 1200 200"
                        preserveAspectRatio="none"
                        className="relative block w-full h-[150px] md:h-[250px] text-[#1b3323] fill-current"
                    >
                        <path
                            ref={wavePathRef}
                            d="M 0 120 Q 600 0 1200 120 L 1200 200 L 0 200 Z"
                        />
                    </svg>
                </div>
            </section>

            <section ref={section2Ref} className="relative h-screen w-full flex items-center justify-center z-20 px-6 md:px-24 bg-[#1b3323]">

                <div className="absolute left-0 top-0 bottom-0 w-full md:w-[45%] h-full pointer-events-none z-10 opacity-60">
                    <div className="relative w-full h-full">
                        <img
                            src="https://ik.imagekit.io/tarubali/herbal_oil_7565003420.jpg?tr=w-400,q-90"
                            alt="Skincare Ritual Model Portrait"
                            className="w-full h-full object-cover object-left"
                        />

                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1b3323]/50 to-[#1b3323] via-[60%] to-[95%]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-[#1b3323] via-transparent to-[#1b3323]" />
                    </div>
                </div>

                <div className="absolute md:left-1/2 left-[55%] top-[10%] md:top-[-20%] -translate-x-1/2 z-30 w-[140px] md:w-[85px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] ">
                    <img
                        src={heroImage}
                        alt="Tarubali Herbal Oil"
                        className="h-64 w-auto max-h-full object-contain drop-shadow-2xl"
                    />
                </div>

                <div className="absolute inset-0 pointer-events-none z-20 hidden md:block">
                    <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">

                        <path
                            ref={mapPath1}
                            d="M 380 400 Q 600 400 620 620"
                            stroke="#f4f3ec"
                            strokeWidth="1"
                            strokeOpacity="0.8"
                        />

                        <path
                            ref={mapPath2}
                            d="M 680 650 Q 850 670 1050 580"
                            stroke="#f4f3ec"
                            strokeWidth="1"
                            strokeOpacity="0.8"
                        />
                    </svg>
                </div>

                <div className="w-full h-full relative z-30">

                    <div className="absolute md:left-[7%] left-[15%] top-[50%] md:top-[42%] max-w-xs">
                        <h3 className="text-lg md:text-lg font-semibold tracking-wide text-[#f4f3ec]">
                            Taru (Balinese for Nature)
                        </h3>
                    </div>

                    <div className="absolute left-1/2 -translate-x-1/2 bottom-[25%] md:bottom-[27%] max-w-xs text-center md:text-left md:left-[40%] ">
                        <h3 className="text-lg md:text-lg font-semibold tracking-wide text-[#f4f3ec]">
                            Bali (Islands Roots)
                        </h3>
                    </div>


                    <div className="absolute right-[5%] md:right-[5%] top-[60%] md:top-[62%] max-w-[280px]">
                        <p className="text-base md:text-lg text-[#f4f3ec] font-semibold leading-snug">
                            A return to the Island's roots, rituals, and natural balance.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ingredients-section relative min-h-screen w-full flex flex-col justify-center items-center z-30 px-6 py-20 bg-[#1b3323]">

                <div className="text-center max-w-3xl z-30 flex flex-col items-center justify-center space-y-6">
                    <h4 className="fade-in-text text-4xl md:text-5xl font-script text-[#dfb76c] drop-shadow-md mb-2 ephesis-regular">
                        Natural Ingredients
                    </h4>

                    <div className="fade-in-text font-serif-elegant flex flex-col space-y-2 cormorant-garamond-rvs">
                        <span className="text-3xl md:text-4xl font-semibold text-[#f4f3ec] uppercase">
                            SELECTED PLANTS & HERBS
                        </span>

                        <span className="text-3xl md:text-4xl font-semibold uppercase text-outline drop-shadow-sm">
                            ZERO CHEMICALS & NO ADDITIVES
                        </span>
                        <span className="text-3xl md:text-4xl font-semibold text-[#f4f3ec] uppercase">
                            MADE IN BALI
                        </span>
                    </div>

                    <div className="fade-in-text pt-10">
                        <a
                            href="#products"
                            className="inline-block text-[#dfb76c] uppercase tracking-widest text-sm font-semibold border-b border-[#dfb76c]/60 pb-1 hover:text-[#f4f3ec] hover:border-[#f4f3ec] transition-all duration-300"
                        >
                            Discover Our Products
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-[40px] md:h-[60px] z-40 bg-[#1b3323]">

                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="balinese-weave" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 0 30 L 15 15 L 30 30 L 15 45 Z" fill="none" stroke="#dfb76c" strokeWidth="1.5" opacity="0.8" />
                                <path d="M 30 30 L 45 15 L 60 30 L 45 45 Z" fill="none" stroke="#dfb76c" strokeWidth="1.5" opacity="0.8" />
                                <path d="M -15 30 L 0 15 L 15 30 L 0 45 Z" fill="none" stroke="#dfb76c" strokeWidth="1.5" opacity="0.8" />
                                <path d="M 15 15 L 30 0 L 45 15 L 30 30 Z" fill="none" stroke="#dfb76c" strokeWidth="1.5" opacity="0.8" />
                                <path d="M 15 45 L 30 30 L 45 45 L 30 60 Z" fill="none" stroke="#dfb76c" strokeWidth="1.5" opacity="0.8" />
                                <line x1="0" y1="30" x2="60" y2="30" stroke="#dfb76c" strokeWidth="1" opacity="0.5" />
                            </pattern>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#balinese-weave)" />
                    </svg>

                    <div className="absolute top-0 left-0 w-full h-[1px] bg-[#dfb76c]/60" />
                </div>
            </section>

            <div className="fixed bottom-8 right-8 z-50">
                <button className="w-12 h-12 rounded-full border border-[#dfb76c] bg-[#1b3323] flex items-center justify-center text-2xl font-serif-elegant text-[#dfb76c] shadow-2xl hover:bg-[#dfb76c] hover:text-[#1b3323] transition-all duration-300">
                    ?
                </button>
            </div>

        </div>
    );
}
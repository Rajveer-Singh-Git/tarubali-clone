import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function SacredNumber() {
    const containerRef = useRef(null);
    const leftTextRef = useRef(null);
    const rightTextRef = useRef(null);
    const imageFrameRef = useRef(null);
    const imageRef = useRef(null);
    const watermarkRef = useRef(null);

    useGSAP(() => {

        gsap.set([leftTextRef.current, rightTextRef.current], {
            y: 60,
            opacity: 0
        });

        gsap.to(watermarkRef.current, {
            y: 80,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });

        gsap.fromTo(imageRef.current,
            {
                scale: 2,
            },
            {
                scale: 1,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'center center',
                    scrub: 1.5,
                }
            }
        );


        gsap.to([leftTextRef.current, rightTextRef.current], {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'center 55%',
                toggleActions: 'play none none reverse'
            }
        });

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full py-24 md:py-40 px-6 md:px-12 overflow-hidden"
        >

            <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden opacity-[0.03] -z-10">
                <span
                    ref={watermarkRef}
                    className="text-[250px] md:text-[400px] font-bold text-[#053801] leading-none whitespace-nowrap -mt-20"
                >
                    108 108 108
                </span>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center relative z-10">

                <div ref={leftTextRef} className="flex flex-col opacity-0">
                    <h3 className="text-[#8C7046] text-5xl md:text-[60px] ephesis-regular mb-2 md:mb-4">
                        Power Of 108
                    </h3>
                    <h2 className="text-[#053801] text-5xl md:text-6xl lg:text-[70px] leading-[0.95] cormorant-garamond-rvs uppercase font-bold tracking-tight">
                        The Sacred <br />
                        Number <br />
                        Behind Our <br />
                        Formula.
                    </h2>
                </div>

                <div className="flex justify-center w-full">
                    <div
                        ref={imageFrameRef}
                        className="w-full max-w-[400px] aspect-[3/4] border border-[#8C7046] overflow-hidden drop-shadow-xl"
                    >
                        <img
                            ref={imageRef}
                            src="https://ik.imagekit.io/tarubali/taru_bali_organic_wellness_oil_b016031873.jpg"
                            alt="Sacred Formula"
                            className="w-full h-full object-cover will-change-transform"
                        />
                    </div>
                </div>

                <div ref={rightTextRef} className="flex flex-col text-[#2c3e2e] opacity-0">
                    <p className="text-base md:text-[17px] leading-relaxed mb-8">
                        Our oil is formulated with a carefully selected <strong>blend of botanical ingredients</strong>, developed to reflect thoughtful formulation and ingredient complexity. Inspired by <strong>Bali's botanical heritage</strong>, each component is chosen for its texture, aroma, and sensory quality, resulting in a cosmetic body oil designed for daily body care.
                    </p>

                    <div className="flex flex-col items-start gap-5">
                        <button className="bg-[#193826] text-[#E4B856] px-8 py-3 text-sm md:text-base font-semibold transition-colors duration-300 hover:bg-[#8C7046] hover:text-[#193826] rounded-2xl">
                            Become a Partner
                        </button>

                        <a
                            href="#"
                            className="text-[#2c3e2e] text-sm md:text-base border-b border-[#2c3e2e] pb-1 transition-colors duration-300 hover:text-[#8C7046] hover:border-[#8C7046]"
                        >
                            Key Ingredients
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
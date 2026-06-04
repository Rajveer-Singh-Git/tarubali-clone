import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import heroImage from "../assets/tarubali.webp";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const scriptTextRef = useRef(null);
    const bottleRef = useRef(null);

    const textWords = "BOTANICAL BODY CARE".split(' ');

    useGSAP(() => {
        const tl = gsap.timeline({ delay: 1.8 });

        gsap.set(scriptTextRef.current, { opacity: 0, y: 20 });
        gsap.set(bottleRef.current, { opacity: 0, scale: 0.9, y: 60 });

        tl.to('.type-char', {
            opacity: 1,
            stagger: 0.03,
            duration: 0.5,
            ease: 'power1.inOut',
        })

            .to(scriptTextRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
            }, '-=0.2')

            .to(bottleRef.current, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 1.2,
                ease: 'power4.out',
            }, '-=0.6');

        gsap.to(bottleRef.current, {
            yPercent: 15,
            ease: 'none',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        });

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}

            className="relative w-full h-screen flex flex-col items-center pt-[15vh] md:pt-[22vh] pb-8 overflow-hidden"
        >
            <div className="relative z-0 flex flex-col items-center pointer-events-none shrink-0 w-full px-4 md:px-10">

                <h1 className="text-[#053801] text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold tracking-[0.05em] md:tracking-[0.1em] cormorant-garamond-rvs text-center leading-tight md:leading-none flex flex-wrap justify-center">

                    {textWords.map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-block mr-[0.25em]">

                            {word.split('').map((char, charIndex) => (
                                <span key={charIndex} className="type-char inline-block opacity-0">
                                    {char}
                                </span>
                            ))}
                        </span>
                    ))}
                </h1>

                <h2
                    ref={scriptTextRef}
                    className="relative z-10 text-[#8C7046] text-6xl sm:text-7xl md:text-[90px] lg:text-[110px] font-bold whitespace-nowrap ephesis-regular -mt-4 md:-mt-8 md:top-[20%]"
                >
                    From Bali
                </h2>
            </div>

            <div
                ref={bottleRef}
                className="relative z-20 flex-1 w-full max-h-[45vh] sm:max-h-[50vh] md:max-h-[60vh] flex justify-center items-center pointer-events-none mt-2 md:-mt-10 lg:-mt-16 rotate-6"
            >
                <img
                    src={heroImage}
                    alt="Tarubali Herbal Oil"
                    className="h-full w-auto max-h-full object-contain drop-shadow-2xl"
                />
            </div>
        </section>
    );
}
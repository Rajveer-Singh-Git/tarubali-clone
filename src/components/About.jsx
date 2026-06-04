import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const dummyImages = [
    "https://ik.imagekit.io/tarubali/taru_bali_soap_93960736ee.jpg?tr=w-1024,q-90",
    "https://ik.imagekit.io/tarubali/organic_unique_wellness_oil_from_bali_866dfe215e.jpg?tr=w-320,q-90",
    "https://ik.imagekit.io/tarubali/herbal_oil_7565003420.jpg?tr=w-320,q-90",
    "https://ik.imagekit.io/tarubali/taru_bali_herbal_soap_21cc038f72.jpg?tr=w-320,q-90",
    "https://ik.imagekit.io/tarubali/taru_bali_oil_d0726e699d.jpg?tr=w-320,q-90"
];

const marqueeImages = [...dummyImages, ...dummyImages];

export default function About() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const trackRef = useRef(null);

    useGSAP(() => {

        gsap.from(textRef.current, {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            }
        });


        gsap.to(trackRef.current, {
            xPercent: -50,
            ease: 'none',
            duration: 25,
            repeat: -1,
            force3D: true,
        });

    }, { scope: containerRef });

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-screen flex flex-col items-center justify-center py-20 md:py-32 overflow-hidden"
        >

            <div className="max-w-5xl mx-auto text-center px-6 md:px-20 mb-16 md:mb-24">
                <h3
                    ref={textRef}
                    className="text-[#053801] text-2xl md:text-2xl lg:text-3xl font-semibold cormorant-garamond-rvs tracking-wide"
                >
                    Natural Ingredients, Botanical Body Oil & Soap
                </h3>
            </div>

            <div className="w-full">

                <div
                    ref={trackRef}
                    className="flex gap-6 md:gap-10 w-max px-4 will-change-transform"
                >
                    {marqueeImages.map((src, index) => (
                        <div
                            key={index}

                            className="w-[200px] sm:w-[250px] md:w-[300px] h-[300px] sm:h-[350px] md:h-[400px] shrink-0"
                        >

                            <svg
                                viewBox="0 0 300 400"
                                className="w-full h-full drop-shadow-lg"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <clipPath id={`arch-clip-${index}`}>
                                        <path d="M 10 390 L 10 180 C 10 130, 80 130, 100 100 C 120 70, 130 30, 150 10 C 170 30, 180 70, 200 100 C 220 130, 290 130, 290 180 L 290 390 Z" />
                                    </clipPath>
                                </defs>

                                <image
                                    href={src}
                                    width="300"
                                    height="400"
                                    preserveAspectRatio="xMidYMid slice"
                                    clipPath={`url(#arch-clip-${index})`}
                                />

                                <path
                                    d="M 10 390 L 10 180 C 10 130, 80 130, 100 100 C 120 70, 130 30, 150 10 C 170 30, 180 70, 200 100 C 220 130, 290 130, 290 180 L 290 390 Z"
                                    fill="none"
                                    stroke="#8C7046"
                                    strokeWidth="3"
                                />
                            </svg>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
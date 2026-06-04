import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function DailyBodyCare() {
    const sectionRef = useRef(null);
    const cardLeftRef = useRef(null);
    const cardCenterRef = useRef(null);
    const cardRightRef = useRef(null);

    useGSAP(() => {

        gsap.set([cardLeftRef.current, cardCenterRef.current, cardRightRef.current], {
            transformOrigin: '50% 200vh',
            rotation: 80,
            opacity: 1
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                pin: true,
                start: 'top top',
                end: '+=250%',
                scrub: 1.5,
            }
        });

        tl.to(cardLeftRef.current, { rotation: -16, ease: 'power1.out', duration: 1 }, 0)
            .to(cardCenterRef.current, { rotation: 0, ease: 'power1.out', duration: 1 }, 0.15)
            .to(cardRightRef.current, { rotation: 16, ease: 'power1.out', duration: 1 }, 0.3);

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-screen bg-[#f5f0e6] flex items-center justify-center overflow-hidden"
        >
            <div className="absolute z-0 flex flex-col items-center text-center w-full px-4">
                <span className="text-[#2c3e2e] text-sm md:text-base mb-4 tracking-[0.2em]">
                    Continue Scrolling
                </span>

                <h2 className="text-[#053801] text-5xl md:text-[5vw] leading-none cormorant-garamond-rvs uppercase font-medium ">
                    YOUR DAILY BODY CARE.
                </h2>

                <h3 className="text-[#8C7046] text-4xl md:text-6xl ephesis-regular mt-4 md:mt-6">
                    Every Day Use
                </h3>
            </div>

            <div className="relative z-10 flex items-center justify-center w-full h-full pointer-events-none">

                <div
                    ref={cardLeftRef}
                    className="absolute z-10 w-[240px] md:w-[300px] h-[320px] md:h-[400px] bg-[#F5F4EC] p-[6px] border border-[#8C7046] drop-shadow-2xl pointer-events-auto"
                >
                    <img
                        src="https://ik.imagekit.io/tarubali/wellness_oil_42c7b37f14.webp?tr=w-480,q-90"
                        alt="Woman with flower"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div
                    ref={cardCenterRef}
                    className="absolute z-30 w-[300px] md:w-[360px] h-[400px] md:h-[460px] flex items-center justify-center p-8 pointer-events-auto"
                >
                    <svg
                        className="absolute inset-0 w-full h-full drop-shadow-2xl -z-10"
                        preserveAspectRatio="none"
                        viewBox="0 0 300 450"
                    >
                        <path
                            d="M5,445 L5,150 C5,130 15,120 25,110 L45,90 C55,80 60,65 65,50 C75,25 110,5 150,5 C190,5 225,25 235,50 C240,65 245,80 255,90 L275,110 C285,120 295,130 295,150 L295,445 Z"
                            fill="#F5F4EC"
                            stroke="#8C7046"
                            strokeWidth="1.5"
                        />
                    </svg>

                    <div className="relative z-10 flex flex-col items-center text-center mt-8 md:mt-12">
                        <p className="text-[#2c3e2e] text-sm md:text-[15px] leading-relaxed mb-6 font-medium">
                            Taru Bali products are designed to accompany your everyday self-care routines. Created for daily body care and massage, each formulation offers a gentle sensory experience that supports moments of relaxation, comfort, and mindful personal care.
                        </p>
                        <button className="bg-[#193826] text-[#E4B856] px-8 py-3 text-sm md:text-base font-semibold transition-colors duration-300 hover:bg-[#8C7046] hover:text-[#193826]">
                            How To Use
                        </button>
                    </div>
                </div>

                <div
                    ref={cardRightRef}
                    className="absolute z-20 w-[240px] md:w-[300px] h-[320px] md:h-[400px] bg-[#F5F4EC] p-[6px] border border-[#8C7046] drop-shadow-2xl pointer-events-auto"
                >
                    <img
                        src="https://ik.imagekit.io/tarubali/wellness_c0c0960a67.jpg?tr=w-1536,q-90"
                        alt="Oil Texture"
                        className="w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>
    );
}
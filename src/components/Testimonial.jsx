import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonial() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useGSAP(() => {

        gsap.fromTo(textRef.current.children,
            {
                y: 40,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="w-full py-32 md:py-48 px-6 flex items-center justify-center bg-transparent"
        >
            <div ref={textRef} className="max-w-4xl text-center flex flex-col items-center gap-6">
                <h2 className="text-[#053801] text-3xl md:text-4xl lg:text-[42px] leading-[1.2] cormorant-garamond-rvs uppercase tracking-wide">
                    "MY SKIN FEELS INCREDIBLY SOFT <br className="hidden md:block" />
                    AFTER JUST ONE USE."
                </h2>

                <p className="text-[#2c3e2e] text-base md:text-lg tracking-wide font-medium">
                    — Spa Client, Uluwatu
                </p>
            </div>
        </section>
    );
}
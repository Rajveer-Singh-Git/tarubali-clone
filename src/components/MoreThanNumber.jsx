import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function MoreThanNumber() {
    const sectionRef = useRef(null);
    const svgRef = useRef(null);
    const textGroupRef = useRef(null);

    useGSAP(() => {

        gsap.to(svgRef.current, {
            rotate: 360,
            duration: 45,
            repeat: -1,
            ease: 'linear',
        });

        gsap.set('.wire-circle', {
            strokeDasharray: 600,
            strokeDashoffset: 600,
            opacity: 0
        });

        gsap.set(textGroupRef.current.children, {
            y: 40,
            opacity: 0
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
            }
        });

        tl.to('.wire-circle', {
            strokeDashoffset: 0,
            opacity: 1,
            duration: 2.5,
            stagger: 0.15,
            ease: 'power2.inOut',
        })
            .to(textGroupRef.current.children, {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power3.out',
            }, "-=1.5");

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 px-6 flex flex-col items-center justify-center text-center overflow-hidden mt-[-8%]"
        >

            <div className="mb-8 flex justify-center w-full">
                <svg
                    ref={svgRef}
                    viewBox="0 0 200 200"
                    className="w-32 h-32 md:w-44 md:h-44 will-change-transform"
                >

                    <circle className="wire-circle" cx="100" cy="100" r="80" stroke="#8C7046" strokeWidth="0.6" fill="none" />
                    <circle className="wire-circle" cx="96" cy="100" r="78" stroke="#8C7046" strokeWidth="0.6" fill="none" transform="rotate(45 100 100)" />
                    <circle className="wire-circle" cx="104" cy="96" r="82" stroke="#8C7046" strokeWidth="0.6" fill="none" transform="rotate(75 100 100)" />
                    <circle className="wire-circle" cx="100" cy="104" r="75" stroke="#8C7046" strokeWidth="0.6" fill="none" transform="rotate(110 100 100)" />
                    <circle className="wire-circle" cx="98" cy="98" r="85" stroke="#8C7046" strokeWidth="0.6" fill="none" transform="rotate(145 100 100)" />
                    <circle className="wire-circle" cx="102" cy="102" r="79" stroke="#8C7046" strokeWidth="0.6" fill="none" transform="rotate(170 100 100)" />
                </svg>
            </div>

            <div ref={textGroupRef} className="max-w-3xl flex flex-col items-center">

                <h3 className="text-[#8C7046] text-4xl md:text-5xl ephesis-regular mb-4 md:mb-6">
                    More than a Number
                </h3>

                <h2 className="text-[#053801] text-3xl md:text-[35px] leading-[1.15] cormorant-garamond-rvs uppercase font-medium">
                    <span className='font-mono'>108</span> REFLECTS THE DEPTH AND <br className="hidden md:block" />
                    COMPLEXITY OF OUR BOTANICAL <br className="hidden md:block" />
                    FORMULATION.
                </h2>
            </div>
        </section>
    );
}
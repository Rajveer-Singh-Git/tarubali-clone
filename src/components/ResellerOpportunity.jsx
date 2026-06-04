import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ResellerOpportunity() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo(imageRef.current,
            { x: -60, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
        )
            .fromTo(contentRef.current.children,
                { x: 40, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out' },
                "-=0.8"
            );

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 md:py-32 px-6 md:px-12 overflow-hidden"
        >
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                <div ref={imageRef} className="w-full relative opacity-0">
                    <div className="w-full aspect-[4/5] md:aspect-[3/4] bg-[#F5F4EC] p-[6px] border border-[#8C7046] drop-shadow-xl">
                        <img

                            src="https://ik.imagekit.io/tarubali/taru_bali_partnerships_aa9b4e870c.jpg?tr=w-1280,q-90"
                            alt="Taru Bali Partner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div ref={contentRef} className="flex flex-col items-center text-center max-w-lg mx-auto">

                    <h3 className="text-[#8C7046] text-4xl md:text-[50px] ephesis-regular mb-4">
                        Reseller Opportunity
                    </h3>

                    <h2 className="text-[#053801] text-4xl md:text-5xl lg:text-[56px] leading-[1] cormorant-garamond-rvs uppercase font-medium tracking-tight mb-8">
                        BRING TARU BALI <br />
                        TO YOUR REGION
                    </h2>

                    <p className="text-[#2c3e2e] text-sm md:text-[15px] leading-relaxed mb-10">
                        Taru Bali is <strong>expanding internationally</strong>, and we invite partners to introduce our cosmetic body care products to new markets. Our products are trusted by customers who <strong>value quality ingredients, consistent formulation</strong>, and <strong>responsible production</strong>. We are currently seeking partners to distribute Taru Bali in selected regions.
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <button className="bg-[#193826] text-[#E4B856] rounded-2xl px-10 py-3.5 text-sm md:text-base font-semibold transition-all duration-300 hover:bg-[#8C7046] hover:text-[#193826]">
                            Become a Partner
                        </button>

                        <a
                            href="#"
                            className="text-[#2c3e2e] text-sm md:text-[15px] border-b border-[#2c3e2e] pb-0.5 transition-colors duration-300 hover:text-[#8C7046] hover:border-[#8C7046]"
                        >
                            See Details
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}
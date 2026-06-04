import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function PartnershipForm() {
    const sectionRef = useRef(null);
    const formBoxRef = useRef(null);
    const imageRef = useRef(null);
    const linkRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo(formBoxRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )

            .fromTo(imageRef.current,
                { y: 30, x: 20, opacity: 0 },
                { y: 0, x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
                "-=0.5"
            )

            .fromTo(linkRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.5, ease: 'power2.out' },
                "-=0.4"
            );

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 md:py-32 px-6 flex justify-center items-center overflow-x-hidden"
        >
            <div className="relative w-full max-w-[650px] flex flex-col">

                <div
                    ref={formBoxRef}
                    className="relative border border-[#8C7046] p-1.5 bg-[#F5F4EC] z-10 opacity-0 rounded-3xl"
                >
                    <div className="border border-[#8C7046] p-8 md:p-14 lg:p-16 rounded-3xl">

                        <h2 className="text-[#053801] text-4xl md:text-5xl lg:text-[35px] leading-[1.05] cormorant-garamond-rvs uppercase tracking-wide mb-6">
                            DO YOU SEE TARU BALI <br className="hidden sm:block" />
                            GROWING IN YOUR <br className="hidden sm:block" />
                            REGION?
                        </h2>

                        <p className="text-[#2c3e2e] text-base md:text-lg mb-8 font-medium">
                            Let's talk.
                        </p>

                        <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Your Name *"
                                    className="w-full border border-[#2c3e2e] bg-transparent p-4 text-sm md:text-base text-[#2c3e2e] placeholder-[#2c3e2e]/70 outline-none focus:border-[#8C7046] transition-colors rounded-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone / WhatsApp *"
                                    className="w-full border border-[#2c3e2e] bg-transparent p-4 text-sm md:text-base text-[#2c3e2e] placeholder-[#2c3e2e]/70 outline-none focus:border-[#8C7046] transition-colors rounded-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address *"
                                    className="w-full border border-[#2c3e2e] bg-transparent p-4 text-sm md:text-base text-[#2c3e2e] placeholder-[#2c3e2e]/70 outline-none focus:border-[#8C7046] transition-colors rounded-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Country / Region *"
                                    className="w-full border border-[#2c3e2e] bg-transparent p-4 text-sm md:text-base text-[#2c3e2e] placeholder-[#2c3e2e]/70 outline-none focus:border-[#8C7046] transition-colors rounded-none"
                                />
                            </div>

                            <textarea
                                placeholder="Message.... *"
                                rows="4"
                                className="w-full border border-[#2c3e2e] bg-transparent p-4 text-sm md:text-base text-[#2c3e2e] placeholder-[#2c3e2e]/70 outline-none focus:border-[#8C7046] transition-colors resize-none rounded-none"
                            ></textarea>


                            <div className="mt-2 flex flex-col items-start gap-4">
                                <button
                                    type="submit"
                                    className="bg-[#193826] text-[#E4B856] px-10 py-3.5 text-sm md:text-base rounded-2xl font-semibold transition-colors duration-300 hover:bg-[#8C7046] hover:text-[#193826]"
                                >
                                    Send Message
                                </button>

                                <p className="text-[11px] md:text-xs text-[#2c3e2e] font-medium tracking-wide">
                                    By submitting this form you agree to the <a href="#" className="underline underline-offset-2 hover:text-[#8C7046] transition-colors">Privacy Policy</a> of our website.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>

                <div ref={linkRef} className="mt-6 ml-2 z-10 opacity-0">
                    <a
                        href="#"
                        className="text-[#2c3e2e] text-sm md:text-[15px] border-b border-[#2c3e2e] pb-0.5 transition-colors duration-300 hover:text-[#8C7046] hover:border-[#8C7046]"
                    >
                        About the Partnership
                    </a>
                </div>

            </div>
        </section>
    );
}
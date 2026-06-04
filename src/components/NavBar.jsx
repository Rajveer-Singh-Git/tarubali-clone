import { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);

    const navRef = useRef(null);
    const logoWrapperRef = useRef(null);
    const logoRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        gsap.set(logoWrapperRef.current, { y: '45vh' });
        gsap.set(logoRef.current, { scale: 2.5 });

        tl.to(logoWrapperRef.current, {
            y: 0,
            duration: 1.5,
            ease: 'power4.inOut',
            delay: 1.1
        })
            .to(logoRef.current, {
                scale: 1,
                duration: 1.5,
                ease: 'power4.inOut',
            }, '<')

            .to('.nav-animate', {
                opacity: 1,
                y: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: 'power3.out',
            }, '-=0.8');

        ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            onEnter: () => setIsScrolled(true),
            onLeaveBack: () => setIsScrolled(false),
        });

    }, { scope: navRef });

    return (
        <nav
            ref={navRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? 'mx-4 md:mx-6 mt-4 rounded-full bg-[#193826]/80 backdrop-blur-md border border-[#E4B856]/20 text-[#E4B856] shadow-lg py-3 px-6 md:px-8'
                : 'mx-0 mt-0 bg-transparent text-[#8C7046] py-5 md:py-6 px-6 md:px-10'
                }`}
        >
            <div className="flex justify-between items-center w-full max-w-7xl mx-auto relative">

                <div className="flex items-center gap-4 md:gap-6">

                    <div className="hidden md:block nav-animate opacity-0 border border-current px-3 py-1 text-sm font-medium cursor-pointer translate-y-[-20px] rounded-2xl">
                        EN
                    </div>
                    <div className="nav-animate opacity-0 flex items-center gap-2 md:gap-3 cursor-pointer group translate-y-[-20px]">

                        <span className="hidden sm:block text-base md:text-lg">Menu</span>
                        <div className="flex flex-col gap-[5px] md:gap-[6px] w-6 md:w-8 mt-1">
                            <div className="h-[1px] bg-current w-full transition-all duration-300 group-hover:w-3/4"></div>
                            <div className="h-[1px] bg-current w-2/3 transition-all duration-300 group-hover:w-full"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                    <div ref={logoWrapperRef} className="flex flex-col items-center relative">
                        <div ref={logoRef} className="flex flex-col items-center cursor-pointer">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="mb-1 transition-transform duration-500 hover:scale-110">
                                <path d="M12 2L15 8H21L16 12.5L18 19L12 15L6 19L8 12.5L3 8H9L12 2Z" />
                            </svg>
                            <span className="text-[10px] tracking-[0.2em] font-bold uppercase whitespace-nowrap">
                                Taru Bali
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3 md:gap-4">

                    <button className={`hidden md:block nav-animate opacity-0 translate-y-[-20px] border px-6 py-2 rounded-2xl transition-colors duration-300 ${isScrolled ? 'border-[#E4B856] hover:bg-[#E4B856] hover:text-[#193826]' : 'border-[#8C7046] hover:bg-[#8C7046] hover:text-[#f5f0e6]'}`}>
                        Partnership
                    </button>

                    <button className={`nav-animate opacity-0 translate-y-[-20px] px-5 py-2 md:px-8 md:py-2 text-sm md:text-base font-semibold transition-all duration-300 border rounded-2xl ${isScrolled ? 'bg-[#E4B856] text-[#193826] border-[#E4B856] hover:bg-[#193826] hover:text-[#E4B856]' : 'bg-[#8C7046] text-[#f5f0e6] border-[#8C7046] hover:bg-[#f5f0e6] hover:text-[#8C7046]'}`}>
                        Shop
                    </button>
                </div>
            </div>
        </nav>
    );
}
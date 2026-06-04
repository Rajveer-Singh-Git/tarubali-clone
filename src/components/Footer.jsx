import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const indexLinks = [
    "The Products", "The Ingredients", "How to Use",
    "The Partnership", "The Blog", "Quality Assurance",
    "Privacy Policy", "Terms & Conditions", "Impressum",
    "Cookie Preferences"
];

export default function Footer() {
    const footerRef = useRef(null);
    const topSectionRef = useRef(null);
    const middleSectionRef = useRef(null);
    const bottomSectionRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo(topSectionRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )
            .fromTo(middleSectionRef.current.children,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
                "-=0.4"
            )
            .fromTo(bottomSectionRef.current.children,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
                "-=0.4"
            );
    }, { scope: footerRef });

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer ref={footerRef} className="w-full bg-[#183624] relative flex flex-col overflow-hidden mb-[-2000%]">

            <div className="w-full h-6 bg-[#183624]">
                <svg width="100%" height="100%" className="block">
                    <defs>
                        <pattern id="weave" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="scale(1.2)">
                            <path d="M0,10 l10,-10 M-10,10 l20,-20 M10,20 l10,-10 M0,30 l20,-20" stroke="#E4B856" strokeWidth="1" fill="none" opacity="0.7" />
                            <path d="M20,10 l-10,-10 M30,10 l-20,-20 M10,20 l-10,-10 M20,30 l-20,-20" stroke="#E4B856" strokeWidth="1" fill="none" opacity="0.7" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#weave)" />
                </svg>
            </div>

            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 pt-20 pb-12 flex flex-col flex-grow">

                <div ref={topSectionRef} className="flex flex-col md:flex-row justify-between items-start mb-24">
                    <div className="max-w-2xl">
                        <h2 className="text-[#E4B856] text-4xl md:text-5xl lg:text-[40px] leading-[1.05] cormorant-garamond-rvs uppercase mb-8">
                            WE CREATE THE OPPORTUNITY. <br />
                            YOU TURN IT INTO SUCCESS
                        </h2>

                        <button className="bg-[#E4B856] text-[#183624] px-10 py-3 text-sm md:text-base font-bold transition-colors duration-300 hover:bg-white hover:text-[#183624] mb-8 rounded-2xl">
                            Be our Partner
                        </button>

                        <p className="text-[#E4B856] text-sm md:text-[15px] font-medium">
                            Have a Question?{' '}
                            <a href="#" className="border-b border-[#E4B856] pb-0.5 transition-colors hover:text-white hover:border-white">
                                Contact Us
                            </a>
                        </p>
                    </div>

                    <div className="hidden md:flex justify-end pr-8">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="#E4B856" className="mb-1 transition-transform duration-500 hover:scale-110">
                            <path d="M12 2L15 8H21L16 12.5L18 19L12 15L6 19L8 12.5L3 8H9L12 2Z" />
                        </svg>
                        <span className="text-[10px] mt-[35%] ml-[-47%] tracking-[0.2em] font-bold uppercase whitespace-nowrap text-[#E4B856]">
                            Taru Bali
                        </span>
                    </div>
                </div>

                <div ref={middleSectionRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-32">

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#E4B856] text-sm font-bold tracking-wide mb-2">Index</h4>
                        <ul className="flex flex-col gap-3">
                            {indexLinks.map((link, i) => (
                                <li key={i}>
                                    <a href="#" className="text-[#E4B856] text-[15px] font-medium transition-opacity hover:opacity-70">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#E4B856] text-sm font-bold tracking-wide mb-2">Social</h4>
                        <a href="#" className="text-[#E4B856] text-[15px] font-medium transition-opacity hover:opacity-70">
                            Instagram
                        </a>
                    </div>

                    <div className="md:col-span-2 flex justify-start md:justify-end items-start gap-4">

                        <img
                            src="https://ik.imagekit.io/tarubali/3_f5377d6461.webp?updatedAt=1772779608739&tr=w-320,q-90"
                            alt="EU Certification"
                            className="w-[70px] h-[70px] object-contain rounded-full"
                        />
                        <img
                            src="https://ik.imagekit.io/tarubali/2_a77642e059.webp?updatedAt=1772779608506&tr=w-320,q-90"
                            alt="Certified Product"
                            className="w-[70px] h-[70px] object-contain rounded-full"
                        />
                    </div>

                </div>

                <div ref={bottomSectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-4 items-end mt-auto">

                    <div className="flex flex-col items-start w-full max-w-sm">
                        <a href="#" className="text-[#E4B856] text-[15px] font-bold border-b border-[#E4B856] pb-0.5 inline-block mb-4 transition-colors hover:text-white hover:border-white">
                            Find Taru Bali in my Region
                        </a>
                        <p className="text-[#E4B856] text-[11px] leading-relaxed pr-4">
                            All applications are based on traditional use and personal experience. Taru Bali is not a medicine and makes no therapeutic claims.
                        </p>
                    </div>

                    <div className="flex flex-col items-start md:items-center text-left md:text-center w-full gap-2 md:mx-auto">
                        <span className="text-[#E4B856] text-[12px] font-medium">© Taru Bali 2026</span>
                        <span className="text-[#E4B856] text-[12px] font-medium">
                            Made With ♥ By{' '}
                            <a href="https://www.linkedin.com/in/rajveer-singh-bareth-16a82a322/" target='_blank' className="border-b border-[#E4B856] pb-0.5 transition-colors hover:text-white hover:border-white">
                                Rajveer Singh Bareth
                            </a>
                        </span>
                    </div>

                    <div className="flex flex-col items-start md:items-end w-full gap-6">
                        <button
                            onClick={scrollToTop}
                            className="text-[#E4B856] text-[13px] font-medium border-b border-[#E4B856] pb-0.5 transition-colors hover:text-white hover:border-white"
                        >
                            Back to Top
                        </button>

                        <div className="flex flex-col items-start md:items-end gap-2">
                            <img
                                src="https://ik.imagekit.io/tarubali/halal_d023a60e4f.webp?tr=w-320,q-90"
                                alt="Halal Indonesia"
                                className="h-10 w-auto object-contain mb-1"
                            />
                            <span className="text-[#E4B856] text-[11px]">
                                Taru Bali is Trademarked in Europe.
                            </span>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full h-6 bg-[#183624]">
                <svg width="100%" height="100%" className="block">
                    <rect width="100%" height="100%" fill="url(#weave)" />
                </svg>
            </div>

            <div className="fixed bottom-8 right-8 z-50">
                <button className="w-12 h-12 rounded-full border border-[#dfb76c] bg-[#1b3323] flex items-center justify-center text-2xl font-serif-elegant text-[#dfb76c] shadow-2xl hover:bg-[#dfb76c] hover:text-[#1b3323] transition-all duration-300">
                    ?
                </button>
            </div>
        </footer>
    );
}
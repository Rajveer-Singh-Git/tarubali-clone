import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const journalEntries = [
    {
        id: 1,
        image: "https://ik.imagekit.io/tarubali/3/taru_bali_bundle_herbal_oil_soap_natural_ingredients_balinese_ritual_set_ca7263cb24.webp?updatedAt=1780041490488&tr=w-1536,q-90",
        tags: ["THE BRAND", "May 29, 2026", "2-3 min Read"],
        title: "Ancient Wisdom, Globally Delivered: Taru Bali Online Shop",
        excerpt: "Experience the ultimate grounded luxury. Taru Bali Nature Secrets launches its global e-commerce boutique this June 2026. Discover our 100% certified vegan skincare duo with worldwide shipping.",
        link: "#"
    },
    {
        id: 2,
        image: "https://ik.imagekit.io/tarubali/heat_controlled_herbal_infusion_oil_taru_bali_nature_secrets_9a4f389547.webp?updatedAt=1779373502361&tr=w-1536,q-90",
        tags: ["SKIN CARE INSIGHTS", "May 21, 2026", "3-5 min Read"],
        title: "Real Herbal Infusion vs Essential Oil Blends: What's the Difference?",
        excerpt: "Learn the difference between real herbal infusion and essential oil blends, and why botanical extraction creates more effective skincare.",
        link: "#"
    },
    {
        id: 3,
        image: "https://ik.imagekit.io/tarubali/wellness_oil_from_bali_0c7b102b0f.jpg?tr=w-1536,q-90",
        tags: ["April 17, 2026", "3-5 min Read"],
        title: "Taru Bali Nature Secrets: Overview of Manufacturing, Compliance, and Brand Commitment",
        excerpt: "Get to know more about Taru Bali Nature Secrets, a CPKB-certified cosmetic manufacturer in Indonesia with EU CPNP compliance.",
        link: "#"
    }
];

export default function BotanicalJournal() {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.fromTo(headerRef.current.children,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )

            .fromTo(cardsRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' },
                "-=0.4"
            );

    }, { scope: sectionRef });

    return (
        <section
            ref={sectionRef}
            className="w-full py-20 md:py-32 px-6 md:px-12 bg-transparent"
        >
            <div className="max-w-[1300px] mx-auto">

                <div
                    ref={headerRef}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 gap-4"
                >
                    <h2 className="text-[#053801] text-4xl md:text-5xl lg:text-[35px] leading-none cormorant-garamond-rvs uppercase opacity-0">
                        THE BOTANICAL JOURNAL
                    </h2>
                    <a
                        href="#"
                        className="text-[#2c3e2e] text-base md:text-base border-b border-[#2c3e2e] pb-0.5 transition-colors duration-300 hover:text-[#8C7046] hover:border-[#8C7046] opacity-0"
                    >
                        View All
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {journalEntries.map((entry, index) => (
                        <div
                            key={entry.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="flex flex-col border border-[#8C7046] bg-[#F5F4EC] h-full opacity-0"
                        >

                            <div className="w-full h-[240px] md:h-[280px] border-b border-[#8C7046] overflow-hidden">
                                <img
                                    src={entry.image}
                                    alt={entry.title}
                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            <div className="p-6 md:p-8 flex flex-col flex-grow">

                                <div className="flex flex-wrap gap-2 md:gap-3 mb-5">
                                    {entry.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="border border-[#2c3e2e] rounded-full px-3 py-1 text-[11px] md:text-xs text-[#2c3e2e] font-medium whitespace-nowrap uppercase tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-[#193826] text-xl md:text-[22px] font-bold leading-[1.3] mb-4">
                                    {entry.title}
                                </h3>

                                <p className="text-[#2c3e2e] text-sm md:text-[15px] leading-relaxed mb-8 flex-grow font-medium">
                                    {entry.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <a
                                        href={entry.link}
                                        className="text-[#193826] text-sm md:text-base font-bold border-b-[1.5px] border-[#193826] pb-0.5 inline-block transition-colors duration-300 hover:text-[#8C7046] hover:border-[#8C7046]"
                                    >
                                        Continue Reading
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
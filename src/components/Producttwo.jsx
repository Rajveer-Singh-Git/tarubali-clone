import React, { useState } from 'react';

export default function Producttwo() {

    const [activeIndex, setActiveIndex] = useState(0);

    const [hoveredHotspot, setHoveredHotspot] = useState(null);

    const galleryImages = [
        {
            src: "https://ik.imagekit.io/tarubali/taru_bali_soap_93960736ee.jpg?tr=w-1024,q-90",
            alt: "Taru Bali Herbal Body Oil bottle close up"
        },
        {
            src: "https://ik.imagekit.io/tarubali/organic_cold_processed_herbal_soap2_0e801ff75b.jpg?tr=w-1280,q-90",
            alt: "Applying body massage oil on skin"
        },
        {
            src: "https://ik.imagekit.io/tarubali/organic_soap_and_body_oil_2b14e56488.jpg?tr=w-1024,q-90",
            alt: "Woman with natural glowing skin smiling"
        },
        {
            src: "https://ik.imagekit.io/tarubali/taru_bali_soap_2d369d12b2.jpg?tr=w-1024,q-90",
            alt: "Relaxing skincare self-care massage ritual"
        },
        {
            src: "https://ik.imagekit.io/tarubali/taru_bali_herbal_soap_21cc038f72.jpg?tr=w-1280,q-90",
            alt: "Organic botanical ingredients detail shot"
        }
    ];

    const hotspots = [
        {
            id: 1,
            top: "45%",
            left: "38%",
            title: "Eco-friendly Wrap",
        },
        {
            id: 2,
            top: "62%",
            left: "59%",
            title: "Rice Milk/White Palm Leaf Green Design",
        }
    ];

    return (
        <section className="relative w-full min-h-screen text-[#1b3323] px-15 py-16 md:py-50 flex items-center justify-center overflow-hidden selection:bg-[#1b3323] selection:text-[#dfb76c]">

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

                <div className="lg:col-span-6 flex flex-row-reverse gap-4 h-full">

                    <div className="relative rounded-full flex-1 aspect-[3/4] border-2  bg-white border-[#dfb76c] overflow-hidden group">
                        <img
                            src={galleryImages[activeIndex].src}
                            alt={galleryImages[activeIndex].alt}
                            className="w-full h-full object-cover transition-all duration-700 ease-out"
                        />

                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-300 pointer-events-none" />

                        {hotspots.map((spot, idx) => (
                            <div
                                key={spot.id}
                                className="absolute z-20"
                                style={{ top: spot.top, left: spot.left }}
                                onMouseEnter={() => setHoveredHotspot(idx)}
                                onMouseLeave={() => setHoveredHotspot(null)}
                            >

                                <button className="relative w-8 h-8 rounded-full flex items-center justify-center focus:outline-none">
                                    <span className="absolute inset-0 rounded-full bg-[#1b3323]/40 pulse-hotspot pointer-events-none" />
                                    <span className="w-5 h-5 rounded-full bg-[#1b3323] border border-[#dfb76c] flex items-center justify-center text-white shadow-md transition-transform duration-300 hover:scale-110">

                                        <svg className="w-3 h-3 text-[#dfb76c]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.011 13H12V3a1 1 0 00-2 0v10H8.358m0 0l-1.39-4.412a1.835 1.835 0 00-3.354 1.135l2.42 8.358a5.5 5.5 0 005.19 3.919h1.166a5.5 5.5 0 004.93-3.055l1.457-3.054a1.5 1.5 0 00-.733-2.012h-.002a1.5 1.5 0 00-1.9.69L15 13z" />
                                        </svg>
                                    </span>
                                </button>

                                <div className={`absolute bottom-10 left-1/2 -translate-x-1/2 w-48 bg-[#1b3323] text-white p-3 rounded shadow-xl border border-[#dfb76c]/40 text-xs transition-all duration-300 pointer-events-none ${hoveredHotspot === idx ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
                                    }`}>
                                    <p className="font-semibold text-[#dfb76c] mb-1 ml-9">{spot.title}</p>

                                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1.5 border-4 border-transparent border-t-[#1b3323]" />
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col gap-2 shrink-0 mt-[40%] ">
                        {galleryImages.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveIndex(idx)}
                                className={`w-14 h-14 md:w-10 md:h-10 border overflow-hidden transition-all duration-300 relative rounded-xl ${activeIndex === idx
                                    ? 'border-[#dfb76c] ring-1 ring-[#dfb76c]'
                                    : 'border-[#dfb76c]/30 opacity-70 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={img.src}
                                    alt={`Thumbnail view ${idx + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>

                </div>

                <div className="lg:col-span-6 flex flex-col items-center text-center lg:text-center space-y-8">

                    <div className="flex flex-col items-center space-y-1">
                        <span className="text-4xl md:text-4xl font-bold text-[#dfb76c]  ephesis-regular">
                            The
                        </span>
                        <h2 className="text-4xl md:text-5xl uppercase cormorant-garamond-rvs font-extrabold">
                            Herbal Soap
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {["DAILY CLEANSING", "GENTLE EXFOLIATION", "SOFTENS SKIN"].map((tag, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 border border-[#1b3323]/40 rounded-full text-xs uppercase tracking-wider font-bold hover:border-[#1b3323] transition-colors"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="relative w-20 h-20 shrink-0 my-2">
                        <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
                            <defs>
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fill="#1b3323" className="text-[7.5px] uppercase tracking-[0.25em] font-medium">
                                <textPath href="#circlePath">
                                    • Dermatologically • Tested • Dermatologically • Tested
                                </textPath>
                            </text>
                        </svg>

                        <div className="absolute inset-0 flex items-center justify-center">
                            <svg className="w-6 h-6 text-[#1b3323]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 3C12 3 6 8.5 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C18 8.5 12 3 12 3Z" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 19V11" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 14C12 14 14 13 15 11" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    <p className="text-base md:text-lg text-[#1b3323]/90 font-extrabold max-w-xl  cormorant-garamond-rvs">
                        Formulated with <strong className="font-semibold text-[#1b3323]">botanical extracts from our oil production and coconut oil</strong>, this herbal soap is produced using a traditional soap-making method. The formulation blends plant-based ingredients with natural oils to create a gentle cleansing bar suitable for daily use. <br /> Each bar is <strong className="font-semibold text-[#1b3323]"> cured for 4–6 weeks,</strong> allowing the soap to develop a firm texture and long-lasting performance. The result is a mild, skin-friendly soap designed for everyday cleansing, leaving the skin feeling clean, soft, and comfortably conditioned.
                    </p>

                    <div className="flex items-center gap-8 pt-4">
                        <button className="bg-[#1b3323] text-[#dfb76c] px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-[#112317] transition-colors shadow-lg rounded-2xl">
                            Partnership
                        </button>
                        <a
                            href="#shop"
                            className="text-[#1b3323] uppercase text-sm tracking-wider font-semibold border-b border-[#1b3323] pb-1 hover:text-[#dfb76c] hover:border-[#dfb76c] transition-colors"
                        >
                            Shop Product
                        </a>
                    </div>

                </div>

            </div>

        </section>


    );
}
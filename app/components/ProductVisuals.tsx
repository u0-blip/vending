import React from 'react';

export default function ProductVisuals() {
    const images = [
        "https://placehold.co/600x400/9CAF88/FFFFFF?text=Healthy+Snacks",
        "https://placehold.co/600x400/8D6E63/FFFFFF?text=Premium+Drinks",
        "https://placehold.co/600x400/F9F9F7/2C3329?text=Happy+Team"
    ];

    return (
        <section className="py-8 w-full overflow-hidden md:max-w-6xl md:mx-auto">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar touch-pan-x md:grid md:grid-cols-3 md:overflow-visible md:snap-none md:gap-8">
                {images.map((img, i) => (
                    <div key={i} className="snap-center shrink-0 w-[85vw] md:w-auto rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <img src={img} alt="Visual" className="w-full h-64 md:h-72 object-cover" />
                    </div>
                ))}
            </div>
        </section>
    )
}

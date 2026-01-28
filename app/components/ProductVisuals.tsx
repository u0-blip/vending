import React from 'react';

export default function ProductVisuals() {
    const images = [
        "https://placehold.co/600x400/9CAF88/FFFFFF?text=Healthy+Snacks",
        "https://placehold.co/600x400/8D6E63/FFFFFF?text=Premium+Drinks",
        "https://placehold.co/600x400/F9F9F7/2C3329?text=Happy+Team"
    ];

    return (
        <section className="py-8 w-full overflow-hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar touch-pan-x">
                {images.map((img, i) => (
                    <div key={i} className="snap-center shrink-0 w-[85vw] md:w-96 rounded-2xl overflow-hidden shadow-sm">
                        <img src={img} alt="Visual" className="w-full h-64 object-cover" />
                    </div>
                ))}
            </div>
            {/* Simple scroll hint dots could go here if needed */}
        </section>
    )
}

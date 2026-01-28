import React from 'react';

export default function HowItWorks() {
    const steps = [
        { title: '1. Quick check', desc: 'We assess your space' },
        { title: '2. Install', desc: 'Professional setup, no cost' },
        { title: '3. Maintain', desc: 'We restock & service regularly' },
    ];

    return (
        <section className="py-12 px-6 max-w-md md:max-w-6xl mx-auto bg-white rounded-3xl my-8 shadow-sm">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-8 relative ml-2 md:ml-0 md:px-8">
                {steps.map((step, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-sage/30 md:border-l-0 md:border-t-2 md:pt-4 last:border-0 pb-2 md:pb-0">
                        {/* Mobile dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 bg-sage rounded-full md:hidden"></div>
                        {/* Desktop dot */}
                        <div className="hidden md:block absolute top-[-6px] left-0 w-3 h-3 bg-sage rounded-full"></div>

                        <h3 className="text-xl font-bold mb-1 text-foreground">{step.title}</h3>
                        <p className="text-gray-600 font-medium">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

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
                    // Removed standard borders, using absolute elements for adjustable positioning
                    <div key={index} className="relative pl-6 pb-2 md:pb-0 md:pl-0 md:pt-10">

                        {/* Mobile Line: shifted down to top-4 */}
                        <div className="absolute left-0 top-4 bottom-0 w-0.5 bg-sage/30 md:hidden"></div>

                        {/* Desktop Line: shifted down to top-5 */}
                        <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-sage/30"></div>

                        {/* Mobile dot: shifted to top-4 */}
                        <div className="absolute -left-[5px] top-4 w-3 h-3 bg-sage rounded-full md:hidden"></div>

                        {/* Desktop dot: adjusted to align with new line position */}
                        <div className="hidden md:block absolute top-[13px] left-0 w-3.5 h-3.5 bg-sage rounded-full"></div>

                        <h3 className="text-xl font-bold mb-1 text-foreground">{step.title}</h3>
                        <p className="text-gray-600 font-medium">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

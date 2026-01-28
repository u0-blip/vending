import React from 'react';

export default function WhoItsFor() {
    const chips = ['Offices', 'Gyms', 'Warehouses', 'Clinics'];

    return (
        <section className="py-12 px-6 max-w-md mx-auto text-center">
            <h2 className="text-2xl font-bold mb-8 leading-tight text-foreground">
                Keep Your Team On-Site and Energised.
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
                {chips.map(chip => (
                    <span key={chip} className="px-6 py-3 bg-white border border-sage/20 shadow-sm text-sage-dark rounded-full font-bold text-lg">
                        {chip}
                    </span>
                ))}
            </div>
        </section>
    )
}

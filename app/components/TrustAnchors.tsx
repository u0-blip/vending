import React from 'react';
import { MapPin, ShieldCheck, CreditCard, Wrench } from 'lucide-react';

export default function TrustAnchors() {
    const items = [
        { icon: MapPin, text: 'Locally owned & operated' },
        { icon: ShieldCheck, text: 'Fully insured' },
        { icon: CreditCard, text: 'Cashless machines' },
        { icon: Wrench, text: 'Reliable servicing' },
    ];

    return (
        <section className="py-8 px-6 max-w-md md:max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:justify-around gap-5 md:gap-8">
                {items.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <div className="flex-shrink-0 text-sage-dark">
                            <item.icon size={24} />
                        </div>
                        <span className="text-lg font-medium text-foreground">{item.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

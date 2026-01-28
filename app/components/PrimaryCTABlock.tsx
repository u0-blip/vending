import React from 'react';
import Link from 'next/link';

export default function PrimaryCTABlock() {
    return (
        <section className="py-16 px-6 bg-sage/10 text-center my-8">
            <h2 className="text-2xl font-bold mb-8 text-foreground">Want a vending machine without the hassle?</h2>
            <Link href="#contact" className="inline-block bg-sage text-white font-bold py-4 px-8 rounded-full text-lg shadow-md hover:bg-sage-dark transition w-full max-w-xs">
                Request a Free Machine
            </Link>
        </section>
    )
}

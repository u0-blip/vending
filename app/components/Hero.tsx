import React from 'react';
import Link from 'next/link';

export default function Hero() {
    return (
        // Added md:max-w-6xl md:grid md:grid-cols-2 md:gap-12 md:text-left
        <section className="flex flex-col md:grid md:grid-cols-2 md:gap-12 items-center text-center md:text-left px-6 pt-24 pb-6 w-full max-w-md md:max-w-6xl mx-auto min-h-[90vh] justify-center">
            <div className="flex flex-col items-center md:items-start w-full">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-foreground">
                    Upgrade Your Space.<br />Fuel Your Team.<br />Zero Cost to You.
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-snug">
                    We install, stock, and maintain modern snack & drink machines at no cost.
                </p>
                <Link href="#contact" className="w-full md:w-auto md:px-12 bg-sage text-white font-bold py-4 rounded-full text-lg shadow-md hover:bg-sage-dark transition mb-8 cursor-pointer inline-block">
                    Get a Free Machine Today
                </Link>
            </div>

            <div className="w-full aspect-[3/4] md:aspect-auto md:h-[600px] bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
                <img
                    src="/hero.png"
                    alt="Modern Vending Machine"
                    className="object-cover w-full h-full"
                />
            </div>
        </section>
    );
}

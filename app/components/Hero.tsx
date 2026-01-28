import React from 'react';

export default function Hero() {
    return (
        <section className="flex flex-col items-center text-center px-6 pt-12 pb-6 w-full max-w-md mx-auto min-h-[90vh] justify-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-foreground">
                Upgrade Your Space.<br />Fuel Your Team.<br />Zero Cost to You.
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-snug">
                We install, stock, and maintain modern snack & drink machines at no cost.
            </p>
            <button className="w-full bg-sage text-white font-bold py-4 rounded-full text-lg shadow-md hover:bg-sage-dark transition mb-8 cursor-pointer">
                Get a Free Machine Today
            </button>
            <div className="w-full aspect-[3/4] bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
                <img
                    src="https://placehold.co/600x800/EEE/31343C?text=Modern+Vending+Machine"
                    alt="Modern Vending Machine"
                    className="object-cover w-full h-full"
                />
            </div>
        </section>
    );
}

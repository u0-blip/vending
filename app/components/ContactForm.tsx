import React from 'react';

export default function ContactForm() {
    return (
        <section className="py-12 px-6 max-w-md md:max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center text-foreground">Ready to level up your lobby?</h2>
            <p className="text-center text-gray-600 mb-8 text-lg">See if your business qualifies for a free machine.</p>

            <form className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-8">
                <input
                    type="text"
                    placeholder="Name"
                    className="p-5 bg-white border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-sage placeholder:text-gray-400"
                />
                <input
                    type="text"
                    placeholder="Business Name"
                    className="p-5 bg-white border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-sage placeholder:text-gray-400"
                />
                <input
                    type="text"
                    placeholder="Suburb"
                    className="p-5 bg-white border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-sage placeholder:text-gray-400"
                />
                <input
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="Phone"
                    className="p-5 bg-white border border-gray-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-sage placeholder:text-gray-400"
                />

                <button
                    type="button"
                    className="mt-4 md:mt-2 md:col-span-2 w-full md:w-1/2 md:mx-auto bg-sage text-white font-bold py-5 rounded-full text-xl shadow-lg hover:bg-sage-dark transition active:scale-[0.98]"
                >
                    Request Free Machine
                </button>
            </form>
        </section>
    )
}

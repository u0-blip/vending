'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-gray-100 md:hidden z-50 animate-in slide-in-from-bottom duration-300">
            <Link href="#contact" className="block w-full text-center bg-sage text-white font-bold py-3 rounded-full shadow-lg hover:bg-sage-dark transition">
                Get a Free Machine
            </Link>
        </div>
    );
}

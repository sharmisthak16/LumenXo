import React from "react";
import { motion } from "framer-motion";
import photo1 from "../Assets/photo1.jpg";
import photo2 from "../Assets/photo2.jpg";
import photo3 from "../Assets/photo3.jpg";
import photo4 from "../Assets/photo4.png";

const partners = [
  { name: "AIRGON", logo: photo1 },
  { name: "Tech Mentees", logo: photo2 },
  { name: "Kaffeinn", logo: photo3 },
  { name: "Grow Gyan", logo: photo4 },
];

export default function GrowingWithUs() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white text-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2 sm:mb-3">
        Who is growing with Us
      </h2>
      <p className="mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed">
        Discover the thriving network of partners, clients, and entrepreneurs
        who are achieving remarkable growth and progress through their
        collaboration with us.
      </p>

      {/* Container with responsive height and proper overflow handling */}
      <div className="overflow-hidden w-full h-24 sm:h-32 lg:h-40 relative bg-gray-50 rounded-lg">
        {partners.map((partner, index) => (
          <motion.img
            key={index}
            src={partner.logo}
            alt={partner.name}
            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-36 lg:h-36 rounded-full object-cover absolute top-1/2 transform -translate-y-1/2 shadow-lg border-2 border-white"
            initial={{ x: "100vw" }}
            animate={{ x: "-200px" }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: index * 2, // Balanced spacing
              ease: "linear"
            }}
            // Add responsive positioning
            style={{
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
            }}
          />
        ))}
      </div>


    </section>
  );
}
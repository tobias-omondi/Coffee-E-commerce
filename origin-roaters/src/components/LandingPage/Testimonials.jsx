import React from "react";

// assets
import testimonialsimg1 from "/src/assets/lady.jpeg";
import testimonialsimg2 from "/src/assets/gentleman.jpeg";
import testimonialsimg3 from "/src/assets/gentleman2.jpeg";

// components
import Footer from "../FooterPage/Footer";

const testimonialsData = [
  {
    image: testimonialsimg1,
    name: "Jane Doe",
    feedback:
      "Amazing coffee! The freshness and flavor are unmatched. Highly recommended.",
  },
  {
    image: testimonialsimg2,
    name: "Morgan Mutua",
    feedback:
      "Love the taste and aroma. It's become a staple in my daily routine.",
  },
  {
    image: testimonialsimg3,
    name: "Tobias Ogola",
    feedback:
      "Well packed and delivered on time. The coffee exceeded my expectations and has a great story behind it.",
  },
];

const Testimonials = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-my-custom-warm mb-8">
          What Others Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {testimonialsData.map(({ image, name, feedback }, idx) => (
            <article
              key={idx}
              className="bg-green-300/10 border border-amber-300 rounded shadow-md p-6 flex flex-col items-center text-center h-[300px]"
              aria-label={`Testimonial from ${name}`}
            >
              <img
                src={image}
                alt={`Photo of ${name}`}
                className="w-24 h-24 object-cover rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg text-my-custom-warm mb-2">
                {name}
              </h3>
              <p className="text-gray-900 text-sm">{feedback}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default Testimonials;

import React from "react";

export default function HomePage() {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "../assets/image/sea.jpg",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
        <div className="relative z-10 text-center p-8 rounded-lg max-w-lg mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore The World</h1>
          <input
            type="text"
            placeholder="Search destination..."
            className="p-3 rounded w-64 md:w-96 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
            Explore Now
          </button>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-12 px-4 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-6 text-center">Popular Destinations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Cox’s Bazar", "Sundarbans", "Bali", "Paris", "Kathmandu", "Santorini"].map((place, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              <img
                src={`https://source.unsplash.com/400x250/?${place}`}
                alt={place}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600">{place}</h3>
                <p className="text-sm text-gray-600">A wonderful destination to explore.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 md:px-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">Explore by Category</h2>
        <div className="flex justify-center flex-wrap gap-6">
          {["Beach", "Mountain", "Historical", "Budget-Friendly", "Luxury"].map((category, i) => (
            <button
              key={i}
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 hover:scale-105 transform transition-all"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-12 px-4 md:px-16 bg-blue-50">
        <h2 className="text-3xl font-semibold mb-6 text-center">Travel Tips</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Best time to travel is usually between October and March.",
            "Check visa requirements before booking.",
            "Try local foods — it’s part of the experience!"
          ].map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <p className="text-gray-700">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 px-4 md:px-16">
        <h2 className="text-3xl font-semibold mb-6 text-center">What Travelers Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { quote: "“Best site for travel planning!”", name: "A Happy Traveler" },
            { quote: "“Loved the recommendations. Helped a lot!”", name: "Adventure Seeker" }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic text-gray-600">{testimonial.quote}</p>
              <p className="mt-2 font-semibold text-gray-800">— {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 px-4 md:px-16 bg-gray-100 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get updates on top travel destinations</h2>
        <input
          type="email"
          placeholder="Your email address"
          className="p-3 rounded w-64 md:w-96 mb-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <br />
        <button className="px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all">
          Subscribe
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 md:px-16">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <h3 className="text-lg font-bold mb-2">Travel Guide</h3>
            <p>Explore the world with us.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <nav className="flex flex-col md:flex-row gap-4">
              <a href="#" className="hover:underline">Home</a>
              <a href="#" className="hover:underline">Destinations</a>
              <a href="#" className="hover:underline">Contact</a>
              <a href="#" className="hover:underline">FAQ</a>
            </nav>
          </div>
          <div className="mt-4 md:mt-0">
            <p>Follow us:</p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-blue-400">Facebook</a>
              <a href="#" className="hover:text-blue-400">Instagram</a>
              <a href="#" className="hover:text-blue-400">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

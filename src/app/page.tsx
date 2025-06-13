"use client";
import React, { useState } from 'react';
import { Phone, MapPin, Clock, Star, Menu, X, Calendar, Gift, Award, Users } from 'lucide-react';

export default function RedCarpetLuxurySpa() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Permanent Eyebrows",
      description: "Perfectly shaped tattooed eyebrows that look natural and last for years",
      price: "From $450",
      image: "🎨"
    },
    {
      title: "Permanent Eyeliner",
      description: "Stunning permanent eyeliner for effortless daily beauty",
      price: "From $350",
      image: "👁️"
    },
    {
      title: "Lip Tattoos",
      description: "Perfect lip color that never fades, kiss-proof and waterproof",
      price: "From $400",
      image: "💋"
    },
    {
      title: "Touch-Up Services",
      description: "Maintain your perfect look with professional touch-ups",
      price: "From $150",
      image: "✨"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      location: "Pearl River, NY",
      text: "Tzippora is amazing! My eyebrows look perfect every morning. Best decision I ever made!",
      rating: 5
    },
    {
      name: "Jennifer L.",
      location: "Nanuet, NY",
      text: "Professional, clean, and the results are incredible. I recommend Red Carpet to everyone!",
      rating: 5
    },
    {
      name: "Maria R.",
      location: "Orangeburg, NY",
      text: "The permanent eyeliner changed my life. I look put-together even without makeup!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-rose-600 to-pink-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-rose-600 font-bold text-xl">RC</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">Red Carpet Luxury Spa</h1>
                <p className="text-sm text-rose-100">Permanent Makeup Specialists</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-rose-200 transition-colors">Home</a>
              <a href="#services" className="hover:text-rose-200 transition-colors">Services</a>
              <a href="#about" className="hover:text-rose-200 transition-colors">About</a>
              <a href="#testimonials" className="hover:text-rose-200 transition-colors">Reviews</a>
              <a href="#contact" className="hover:text-rose-200 transition-colors">Contact</a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden pb-4">
              <div className="flex flex-col space-y-2">
                <a href="#home" className="py-2 hover:text-rose-200 transition-colors">Home</a>
                <a href="#services" className="py-2 hover:text-rose-200 transition-colors">Services</a>
                <a href="#about" className="py-2 hover:text-rose-200 transition-colors">About</a>
                <a href="#testimonials" className="py-2 hover:text-rose-200 transition-colors">Reviews</a>
                <a href="#contact" className="py-2 hover:text-rose-200 transition-colors">Contact</a>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Wake Up <span className="text-rose-600">Beautiful</span> Every Day
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional permanent makeup services in Nanuet, NY. Serving Rockland County and Northern Bergen County with premium pigments, gentle techniques, and stunning results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-rose-600 hover:bg-rose-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                <Calendar className="inline mr-2" size={20} />
                Book Your Consultation
              </button>
              <button className="bg-white hover:bg-gray-50 text-rose-600 border-2 border-rose-600 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                <Gift className="inline mr-2" size={20} />
                Gift Cards Available
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Signature Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From flawless brows to bold eyeliner and perfect lip color – feel confident, radiant, and beautiful every day.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-rose-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="text-4xl mb-4 text-center">{service.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                <p className="text-rose-600 font-bold text-lg mb-4">{service.price}</p>
                <button className="w-full bg-rose-600 hover:bg-rose-700 text-white py-3 rounded-full font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-rose-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Tzippora</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a licensed esthetician with over 6 years of experience serving NY and NJ. Specializing in eyeliner tattooing and permanent makeup, I'm passionate about enhancing your natural beauty.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <Award className="mx-auto text-rose-600 mb-2" size={40} />
                  <p className="font-semibold text-gray-800">Licensed Professional</p>
                  <p className="text-sm text-gray-600">NY & NJ Certified</p>
                </div>
                <div className="text-center">
                  <Users className="mx-auto text-rose-600 mb-2" size={40} />
                  <p className="font-semibold text-gray-800">6+ Years Experience</p>
                  <p className="text-sm text-gray-600">1000+ Happy Clients</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-800 mb-3">Why Choose Red Carpet Luxury Spa?</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-rose-600 mr-2">✓</span> Premium pigments & gentle techniques</li>
                  <li className="flex items-center"><span className="text-rose-600 mr-2">✓</span> Clean, comfortable environment</li>
                  <li className="flex items-center"><span className="text-rose-600 mr-2">✓</span> Perfect for busy professionals</li>
                  <li className="flex items-center"><span className="text-rose-600 mr-2">✓</span> Long-lasting, natural results</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl p-8 text-white text-center">
                <div className="text-6xl mb-4">💄</div>
                <h3 className="text-2xl font-bold mb-4">Professional Results</h3>
                <p className="text-rose-100">
                  "I believe every woman deserves to feel beautiful and confident. My goal is to enhance your natural features while saving you time in your daily routine."
                </p>
                <p className="mt-4 font-semibold">- Tzippora, Licensed Esthetician</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Real results from real women in Rockland County</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-b from-white to-rose-50 rounded-2xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Look?</h2>
            <p className="text-xl text-rose-100">Book your consultation today and wake up beautiful tomorrow</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="mr-4 text-rose-200" size={24} />
                  <div>
                    <p className="font-semibold">197 Main St</p>
                    <p className="text-rose-100">Nanuet, NY 10954</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="mr-4 text-rose-200" size={24} />
                  <div>
                    <p className="font-semibold">Call or Text</p>
                    <p className="text-rose-100">(845) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-4 text-rose-200" size={24} />
                  <div>
                    <p className="font-semibold">Business Hours</p>
                    <p className="text-rose-100">Mon-Sat: 9AM-6PM</p>
                    <p className="text-rose-100">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur">
                <h4 className="font-bold mb-3">Serving These Areas:</h4>
                <p className="text-rose-100 leading-relaxed">
                  Nanuet • Pearl River • Orangeburg • Rockland County • Northern Bergen County • New City • Spring Valley • Suffern
                </p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Book Your Appointment</h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 placeholder-rose-200 text-white border border-rose-300"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 placeholder-rose-200 text-white border border-rose-300"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 placeholder-rose-200 text-white border border-rose-300"
                />
                <select className="w-full p-4 rounded-lg bg-white bg-opacity-20 text-white border border-rose-300">
                  <option value="">Select Service</option>
                  <option value="eyebrows">Permanent Eyebrows</option>
                  <option value="eyeliner">Permanent Eyeliner</option>
                  <option value="lips">Lip Tattoos</option>
                  <option value="consultation">Free Consultation</option>
                </select>
                <textarea 
                  placeholder="Tell us about your beauty goals..."
                  rows={4}
                  className="w-full p-4 rounded-lg bg-white bg-opacity-20 placeholder-rose-200 text-white border border-rose-300"
                ></textarea>
                <button className="w-full bg-white text-rose-600 py-4 rounded-lg font-bold text-lg hover:bg-rose-50 transition-colors">
                  Book My Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">RC</span>
                </div>
                <span className="font-bold text-lg">Red Carpet Luxury Spa</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional permanent makeup services in Nanuet, NY. Enhancing natural beauty with premium techniques and lasting results.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Permanent Eyebrows</li>
                <li>Permanent Eyeliner</li>
                <li>Lip Tattoos</li>
                <li>Touch-Up Services</li>
                <li>Gift Cards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>197 Main St, Nanuet, NY 10954</p>
                <p>(845) 555-0123</p>
                <p>info@redcarpetluxuryspa.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Red Carpet Luxury Spa. All rights reserved. | Licensed Esthetician in NY & NJ</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
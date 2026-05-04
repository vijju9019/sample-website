import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Build Stunning Websites Faster
          </h2>
          <p className="text-gray-600 mb-6">
            Create modern, responsive, and beautiful websites using Tailwind CSS and React.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600" onClick={()=>{
                navigate('/Services')
            }}>
              Get Started
            </button>
            <button className="border px-6 py-3 rounded-xl hover:bg-gray-100" onClick={()=>{
                navigate('/About')
            }}>
              Learn More
            </button>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/600x400/?technology,website"
          alt="Hero"
          className="rounded-2xl shadow-lg mt-10 md:mt-0"
        />
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-16">
        <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
          {[
            { title: "Fast", desc: "Optimized performance for better UX." },
            { title: "Responsive", desc: "Looks great on all devices." },
            { title: "Customizable", desc: "Easily adapt to your needs." },
          ].map((feature, index) => (
            <div key={index} className="p-6 rounded-2xl shadow hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 bg-gray-50">
        <h3 className="text-3xl font-bold text-center mb-12">Pricing</h3>
        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-7xl mx-auto">
          {["Basic", "Pro", "Enterprise"].map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow text-center">
              <h4 className="text-xl font-semibold mb-4">{plan}</h4>
              <p className="text-4xl font-bold mb-6">$19</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-6 text-center shadow-inner">
        <p className="text-gray-500">© 2026 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

  

export default Home
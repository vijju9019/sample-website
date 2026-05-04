import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navi = useNavigate('/contact')
  return (
      <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
        <p className="text-gray-600 text-lg">
          We are passionate about building modern, scalable, and user-friendly web experiences. Our mission is to simplify development and deliver high-quality digital products.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-8 px-8 max-w-6xl mx-auto py-12">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower developers and businesses with powerful tools and modern technologies that make building websites faster and more efficient.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To become a leading platform for innovation in web development, helping creators turn ideas into impactful digital experiences.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {[
            { name: "John Doe", role: "Frontend Developer" },
            { name: "Jane Smith", role: "Backend Developer" },
            { name: "Alex Johnson", role: "UI/UX Designer" },
          ].map((member, index) => (
            <div key={index} className="text-center p-6 rounded-2xl shadow hover:shadow-lg">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200 mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Want to work with us?</h2>
        <p className="text-gray-600 mb-6">
          Let’s build something amazing together.
        </p>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-600"
        
        onClick={()=>{navi('/contact')}}>
          Contact Us
        </button>
      </section>
    </div>
  )
}

export default About
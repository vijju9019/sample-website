import React from 'react'

const Services = () => {
    const services = [
    {
      title: "Web Development",
      desc: "Modern, responsive websites using React and Tailwind CSS.",
    },
    {
      title: "UI/UX Design",
      desc: "Clean, user-centered designs with great user experience.",
    },
    {
      title: "Backend Development",
      desc: "Scalable APIs and server-side solutions using Node.js.",
    },
    {
      title: "SEO Optimization",
      desc: "Improve visibility and ranking on search engines.",
    },
    {
      title: "Performance Optimization",
      desc: "Faster load times and better performance for your apps.",
    },
    {
      title: "Maintenance & Support",
      desc: "Ongoing support and updates for your applications.",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <section className="text-center py-16 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
        <p className="text-gray-600 text-lg">
          We offer a wide range of services to help you build and grow your digital presence.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto pb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Services




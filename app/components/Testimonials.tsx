const testimonials = [
  {
    quote: "WebCrece transformó completamente nuestra presencia online. ¡Nuestras ventas han aumentado un 40%!",
    author: "María Rodríguez",
    company: "Café Aroma",
  },
  {
    quote: "El mejor equipo de diseño web con el que hemos trabajado. Profesionales y creativos.",
    author: "Carlos Méndez",
    company: "Muebles Modernos",
  },
  {
    quote: "Gracias a su gestión de redes sociales, hemos duplicado nuestros seguidores en tres meses.",
    author: "Laura Sánchez",
    company: "Boutique Elegance",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Lo Que Dicen Nuestros Clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-600">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

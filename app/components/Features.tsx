import { CheckCircle, Zap, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Diseño Web Moderno",
    description: "Creamos sitios web atractivos y funcionales que convierten visitantes en clientes.",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Redes Sociales",
    description: "Gestionamos tus perfiles para aumentar tu visibilidad y engagement.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Atención Personalizada",
    description: "Te acompañamos en cada paso con un servicio adaptado a tus necesidades.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Análisis de Resultados",
    description: "Medimos el impacto de nuestras estrategias para optimizar constantemente.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

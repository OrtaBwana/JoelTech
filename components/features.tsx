import { Zap, Users, Search, LifeBuoy } from "lucide-react"

const features = [
  {
    name: "Diseño Web Moderno",
    description: "Creamos sitios web atractivos, responsivos y optimizados para convertir visitantes en clientes.",
    icon: Zap,
  },
  {
    name: "Gestión de Redes Sociales",
    description:
      "Administramos tus perfiles en redes sociales para aumentar tu visibilidad y engagement con tu audiencia.",
    icon: Users,
  },
  {
    name: "SEO y Posicionamiento",
    description: "Optimizamos tu presencia online para que te encuentren quienes buscan tus productos o servicios.",
    icon: Search,
  },
  {
    name: "Soporte Continuo",
    description:
      "Te acompañamos en todo el proceso con actualizaciones y mantenimiento constante de tu presencia digital.",
    icon: LifeBuoy,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Nuestros Servicios</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Descubre cómo WebCrece puede transformar la presencia digital de tu negocio con nuestros servicios
          especializados.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

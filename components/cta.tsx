import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          ¿Listo para impulsar tu negocio en internet?
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Únete a los cientos de negocios que confían en WebCrece para mejorar su presencia digital y alcanzar nuevos
          clientes en el mundo online.
        </p>
        <Button size="lg" className="mt-4">
          Contáctanos Hoy
        </Button>
      </div>
    </section>
  )
}

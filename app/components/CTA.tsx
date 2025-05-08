import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">¿Listo para destacar en internet?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Únete a los cientos de negocios que ya están creciendo con WebCrece.
        </p>
        <Button size="lg" variant="secondary">
          Solicita tu Cotización Gratis
        </Button>
      </div>
    </section>
  )
}

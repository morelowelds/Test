import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Microscope,
  Building2,
  LineChart,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Instagram,
  FileDown
} from 'lucide-react';
import { usePDF } from 'react-to-pdf';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { toPDF, targetRef } = usePDF({filename: 'morelo-welds-presentacion.pdf'});

  const projectImages = [
    "/images/proyecto-1.jpg",
    "/images/proyecto-2.jpg",
    "/images/proyecto-3.jpg",
    "/images/proyecto-4.jpg",
    "/images/proyecto-5.jpg"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const WhatsAppButton = () => (
    <a
      href="https://wa.me/573136547095"
      target="_blank"
      rel="noopener noreferrer"
      className="btn-whatsapp flex items-center px-6 py-3 text-white font-bold rounded-lg"
    >
      <MessageSquare className="w-5 h-5 mr-2" />
      Contactar por WhatsApp
    </a>
  );

  return (
    <>
      {/* Download PDF Button */}
      <button
        onClick={() => toPDF()}
        className="fixed top-4 right-4 z-50 btn-metallic px-4 py-2 rounded-lg flex items-center gap-2 text-white"
      >
        <FileDown className="w-5 h-5" />
        Descargar PDF
      </button>

      <div className="min-h-screen bg-black text-white" ref={targetRef}>
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img 
                  src="/images/logo.png"
                  alt="Morelo Welds Logo" 
                  className="h-12 w-auto"
                />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                  Morelo Welds
                </span>
              </div>
              <WhatsAppButton />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20">
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/hero-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                SOLUCIONES EN SOLDADURA PARA GRANDES INDUSTRIAS
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
                Servicios certificados en soldadura industrial, ensayos no destructivos y fabricación metálica para el sector petrolero, minero y energético.
              </h2>
              <div className="flex flex-wrap gap-4">
                <WhatsAppButton />
                <button className="btn-metallic px-8 py-4 text-white font-bold rounded-lg flex items-center">
                  Conoce más
                  <ArrowRight className="ml-2" size={20} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-metallic-2">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Nuestros Proyectos
            </h2>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <div className="relative h-[600px]">
                  <img
                    src={projectImages[currentSlide]}
                    alt={`Proyecto ${currentSlide + 1}`}
                    className="absolute w-full h-full object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              </div>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              <div className="flex justify-center mt-4 gap-2">
                {projectImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentSlide === index ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-metallic-1">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              ¿Por qué elegir Morelo Welds?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle2 className="w-12 h-12 text-blue-400" />,
                  title: "Certificaciones Internacionales",
                  description: "Certificaciones AWS, ASME y API que garantizan la calidad de nuestro trabajo"
                },
                {
                  icon: <Building2 className="w-12 h-12 text-blue-400" />,
                  title: "Experiencia Comprobada",
                  description: "Más de 15 años de experiencia en el sector industrial"
                },
                {
                  icon: <LineChart className="w-12 h-12 text-blue-400" />,
                  title: "Proyectos Exitosos",
                  description: "Historial probado con las principales empresas del sector"
                }
              ].map((item, index) => (
                <div key={index} className="card-metallic p-8 rounded-xl text-white">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <WhatsAppButton />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-metallic-3">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Servicios Especializados
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Microscope className="w-12 h-12 text-orange-400" />,
                  title: "Ensayos No Destructivos",
                  description: "Inspección visual, líquidos penetrantes, partículas magnéticas, ultrasonido"
                },
                {
                  icon: <Flame className="w-12 h-12 text-orange-400" />,
                  title: "Soldadura Industrial",
                  description: "SMAW, GMAW, GTAW, FCAW para estructuras, tuberías y equipos a presión"
                },
                {
                  icon: <Building2 className="w-12 h-12 text-orange-400" />,
                  title: "Fabricación Metálica",
                  description: "Diseño y construcción de tanques, contenedores y estructuras pesadas"
                },
                {
                  icon: <LineChart className="w-12 h-12 text-orange-400" />,
                  title: "Asesoría Técnica",
                  description: "Normativas, procedimientos, certificaciones y seguridad"
                }
              ].map((service, index) => (
                <div key={index} className="card-metallic p-8 rounded-xl text-white">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Clients Section */}
        <section className="py-20 bg-metallic-2">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Nuestros Clientes
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              <img
                src="/images/client-1.svg"
                alt="Ecopetrol"
                className="w-48 h-auto mx-auto brightness-0 invert opacity-70 hover:opacity-100 transition-all"
              />
              <img
                src="/images/client-2.svg"
                alt="Chevron"
                className="w-48 h-auto mx-auto brightness-0 invert opacity-70 hover:opacity-100 transition-all"
              />
              <img
                src="/images/client-3.svg"
                alt="Shell"
                className="w-48 h-auto mx-auto brightness-0 invert opacity-70 hover:opacity-100 transition-all"
              />
              <img
                src="/images/client-4.svg"
                alt="Pemex"
                className="w-48 h-auto mx-auto brightness-0 invert opacity-70 hover:opacity-100 transition-all"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-metallic-1">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Casos de Éxito
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Gracias a Morelo Welds, logramos cumplir con las exigencias de soldadura en nuestra refinería sin retrasos.",
                  author: "Gerente de Ingeniería",
                  company: "Empresa Petrolera XYZ"
                },
                {
                  quote: "Su equipo certificado nos ayudó a optimizar la calidad y seguridad en la construcción de nuestra planta minera.",
                  author: "Director de Operaciones",
                  company: "Compañía Minera ABC"
                }
              ].map((testimonial, index) => (
                <div key={index} className="card-metallic p-8 rounded-xl text-white">
                  <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-bold text-gray-200">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <WhatsAppButton />
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 bg-metallic-2">
          <div className="container mx-auto px-6">
            <img 
              src="/images/logo.png"
              alt="Morelo Welds Logo" 
              className="h-20 w-auto mx-auto mb-8"
            />
            <div className="flex justify-center items-center gap-6">
              <a
                href="https://www.facebook.com/profile.php?id=61564102792635"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="https://www.instagram.com/morelowelds/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
            <p className="text-center text-gray-400 mt-6">
              © {new Date().getFullYear()} Morelo Welds. Todos los derechos reservados.
            </p>
          </div>
        </footer>

        {/* Fixed WhatsApp Button */}
        <a
          href="https://wa.me/573136547095"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 btn-whatsapp p-4 rounded-full z-50"
        >
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}

export default App;
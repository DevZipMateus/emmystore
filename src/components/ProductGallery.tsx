
import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ProductGallery = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  const galleryImages = [
    {
      id: 1,
      image: '/lovable-uploads/6fadff1c-2230-47b1-9300-fffedadce1aa.png',
      title: 'Blusas de Tricô Variadas',
      description: 'Coleção de blusas em diferentes cores e texturas'
    },
    {
      id: 2,
      image: '/lovable-uploads/aa1cdf72-c687-45ff-a668-db0032da985e.png',
      title: 'Shorts Emmy',
      description: 'Shorts confortáveis com etiqueta da marca Emmy'
    },
    {
      id: 3,
      image: '/lovable-uploads/692f4fd1-3200-4e5c-9ee1-f8fa04731a2c.png',
      title: 'Blusa Térmica Flanelada',
      description: 'Peça ideal para dias mais frios'
    },
    {
      id: 4,
      image: '/lovable-uploads/cb1059d9-3316-42ee-9a9d-cddfc1b6de95.png',
      title: 'Blusa Branca Emmy',
      description: 'Blusa básica branca com textura especial'
    },
    {
      id: 5,
      image: '/lovable-uploads/f8a9b399-d88a-49d3-b823-772288cb4166.png',
      title: 'Blusa Rose Emmy',
      description: 'Blusa em tricô na cor rose com acabamento perfeito'
    },
    {
      id: 6,
      image: '/lovable-uploads/408bac3f-1e5b-4b75-b960-fee43530dde5.png',
      title: 'Vestido Verde Elegante',
      description: 'Vestido verde com detalhes em franzido'
    },
    {
      id: 7,
      image: '/lovable-uploads/fafd4c8f-a65a-4e5e-baf7-6cb7555be82d.png',
      title: 'Blusas Emmy Multicores',
      description: 'Variedade de cores da marca Emmy'
    },
    {
      id: 8,
      image: '/lovable-uploads/38c9e00b-77de-4e11-8805-0a9c1d17a274.png',
      title: 'Blusa Listrada Emmy',
      description: 'Blusa com listras pretas e brancas'
    }
  ];

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-gray-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gray-800 mb-6">
            Nossa <span className="text-[#bd8c90]">Galeria</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Conheça nossa coleção de roupas femininas com qualidade e estilo únicos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {galleryImages.map((item) => (
                <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-lg font-playfair font-semibold mb-1 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm font-inter text-gray-200">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const message = encodeURIComponent("Olá! Gostaria de conhecer mais produtos da Emmy Store.");
              window.open(`https://wa.me/5515991606506?text=${message}`, '_blank');
            }}
            className="bg-[#bd8c90] text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-[#a87b80] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
          >
            <img 
              src="/lovable-uploads/6ce76677-2d58-45c8-81de-3e13ba1cf2f5.png" 
              alt="WhatsApp"
              className="w-5 h-5 mr-2"
            />
            Ver Mais Produtos
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;


import React from 'react';

const FeaturedCollection = () => {
  const products = [
    {
      id: 1,
      name: 'CONCRETE HOODIE',
      price: 'R$ 299',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop',
      category: 'HOODIES'
    },
    {
      id: 2,
      name: 'STREET KING TEE',
      price: 'R$ 149',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=2070&auto=format&fit=crop',
      category: 'CAMISETAS'
    },
    {
      id: 3,
      name: 'NEON JOGGERS',
      price: 'R$ 249',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
      category: 'CALÇAS'
    },
    {
      id: 4,
      name: 'URBAN BOMBER',
      price: 'R$ 399',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=2070&auto=format&fit=crop',
      category: 'JAQUETAS'
    },
    {
      id: 5,
      name: 'GRAFFITI CAP',
      price: 'R$ 89',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop',
      category: 'ACESSÓRIOS'
    },
    {
      id: 6,
      name: 'MIDNIGHT SHORTS',
      price: 'R$ 179',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=2070&auto=format&fit=crop',
      category: 'SHORTS'
    }
  ];

  return (
    <section id="collection" className="py-20 bg-urban-concrete">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white mb-4">
            COLEÇÃO EM <span className="text-urban-neon">DESTAQUE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Peças exclusivas que definem o streetwear autêntico. Cada item conta uma história das ruas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.id}
              className="group relative overflow-hidden bg-urban-black/50 rounded-lg transition-all duration-500 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-urban-black via-transparent to-transparent"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-urban-neon text-sm font-medium mb-1">{product.category}</p>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-urban-electric">{product.price}</span>
                  <button className="bg-urban-neon text-urban-black px-4 py-2 font-bold text-sm transition-all duration-300 hover:bg-urban-flame">
                    COMPRAR
                  </button>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-urban-neon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;

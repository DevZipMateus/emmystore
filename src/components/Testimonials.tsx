
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: '@streetking.sp',
      text: 'URBNSZN entende o que é autenticidade. Cada peça conta uma história real.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 2,
      name: '@graffitigirl',
      text: 'Finalmente uma marca que representa nossa cultura de verdade. Respect!',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: 3,
      name: '@skateboard.vibes',
      text: 'Qualidade top, style único. URBNSZN é referência no streetwear nacional.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
      likes: '1,234'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=2070&auto=format&fit=crop',
      likes: '2,156'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=2070&auto=format&fit=crop',
      likes: '987'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop',
      likes: '3,421'
    }
  ];

  return (
    <section className="py-20 bg-urban-concrete">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-black text-white mb-4">
            O QUE A <span className="text-urban-neon">COMUNIDADE</span> FALA
          </h2>
          <p className="text-gray-400 text-lg">
            Vozes autênticas das ruas que vestem nossa atitude.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="glass-effect p-6 rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-urban-neon/20 flex items-center justify-center mr-3">
                  <span className="text-urban-neon font-bold">@</span>
                </div>
                <span className="text-urban-neon font-medium">{testimonial.name}</span>
              </div>
              <p className="text-white text-lg leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>

        {/* Instagram Feed */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-orbitron font-black text-white mb-4">
            #<span className="text-urban-flame">URBNSZNSTYLE</span>
          </h3>
          <p className="text-gray-400">
            Compartilhe seu look e marque @urbnszn para aparecer aqui!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-urban-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-2xl mb-2">❤️</div>
                  <div className="font-bold">{post.likes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

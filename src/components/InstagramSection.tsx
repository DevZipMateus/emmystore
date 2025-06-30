
import React from 'react';
import { Instagram, Heart, MessageCircle, Share } from 'lucide-react';

const InstagramSection = () => {
  const instagramPosts = [
    {
      id: 1,
      image: '/lovable-uploads/408bac3f-1e5b-4b75-b960-fee43530dde5.png',
      likes: '234',
      comments: '12'
    },
    {
      id: 2,
      image: '/lovable-uploads/692f4fd1-3200-4e5c-9ee1-f8fa04731a2c.png',
      likes: '189',
      comments: '8'
    },
    {
      id: 3,
      image: '/lovable-uploads/6ce76677-2d58-45c8-81de-3e13ba1cf2f5.png',
      likes: '156',
      comments: '15'
    },
    {
      id: 4,
      image: '/lovable-uploads/6fadff1c-2230-47b1-9300-fffedadce1aa.png',
      likes: '298',
      comments: '23'
    },
    {
      id: 5,
      image: '/lovable-uploads/9c762b1b-358b-4424-a27a-23afe414ae1e.png',
      likes: '142',
      comments: '7'
    },
    {
      id: 6,
      image: '/lovable-uploads/aa1cdf72-c687-45ff-a668-db0032da985e.png',
      likes: '267',
      comments: '18'
    }
  ];

  return (
    <section id="instagram" className="py-16 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-rose-500 mr-3" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
              Siga-nos no <span className="text-rose-500">Instagram</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mb-6">
            Acompanhe nossos produtos mais recentes, promoções especiais e novidades da Emmy Store
          </p>
          <a 
            href="https://www.instagram.com/emmy.store15?igsh=MW1xMWZocGI1YXZ2eg==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-inter font-semibold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Instagram className="w-5 h-5 mr-2" />
            @emmy.store15
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => (
            <div 
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={post.image}
                alt={`Post do Instagram ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay com estatísticas */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex items-center justify-center space-x-6">
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 mr-1 fill-current" />
                      <span className="font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-1" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instagram icon overlay */}
              <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-4 h-4 text-rose-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 font-inter mb-4">
            Marque suas fotos com <span className="font-semibold text-rose-500">#EmmyStore</span> para aparecer aqui!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://www.instagram.com/emmy.store15?igsh=MW1xMWZocGI1YXZ2eg==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-rose-500 text-white px-6 py-3 rounded-full font-inter font-semibold hover:bg-rose-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ver mais no Instagram
            </a>
            <button 
              onClick={() => navigator.share?.({
                title: 'Emmy Store',
                text: 'Confira os produtos incríveis da Emmy Store!',
                url: window.location.href
              })}
              className="flex items-center text-gray-600 hover:text-rose-500 transition-colors duration-300 font-inter"
            >
              <Share className="w-4 h-4 mr-2" />
              Compartilhar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;

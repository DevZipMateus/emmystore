
import React from 'react';
import { Instagram, Heart, MessageCircle, Share } from 'lucide-react';
const InstagramSection = () => {
  const instagramPosts = [{
    id: 1,
    image: '/lovable-uploads/408bac3f-1e5b-4b75-b960-fee43530dde5.png',
    likes: '234',
    comments: '12'
  }, {
    id: 2,
    image: '/lovable-uploads/692f4fd1-3200-4e5c-9ee1-f8fa04731a2c.png',
    likes: '189',
    comments: '8'
  }, {
    id: 3,
    image: '/lovable-uploads/6ce76677-2d58-45c8-81de-3e13ba1cf2f5.png',
    likes: '156',
    comments: '15'
  }, {
    id: 4,
    image: '/lovable-uploads/6fadff1c-2230-47b1-9300-fffedadce1aa.png',
    likes: '298',
    comments: '23'
  }, {
    id: 5,
    image: '/lovable-uploads/9c762b1b-358b-4424-a27a-23afe414ae1e.png',
    likes: '142',
    comments: '7'
  }, {
    id: 6,
    image: '/lovable-uploads/aa1cdf72-c687-45ff-a668-db0032da985e.png',
    likes: '267',
    comments: '18'
  }];
  return <section id="instagram" className="py-16 bg-gradient-to-br from-rose-50 via-white to-rose-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Instagram className="w-8 h-8 text-rose-600 mr-3" />
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800">
              Siga-nos no <span className="bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 bg-clip-text text-transparent font-extrabold">Instagram</span>
            </h2>
          </div>
          <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto mb-6">
            Acompanhe nossos produtos mais recentes, promoções especiais e novidades da Emmy Store
          </p>
          <a href="https://www.instagram.com/emmy.store15?igsh=MW1xMWZocGI1YXZ2eg==" target="_blank" rel="noopener noreferrer" className="inline-flex items-center metallic-button text-white px-8 py-3 rounded-full font-inter font-semibold text-lg shadow-lg">
            <Instagram className="w-5 h-5 mr-2" />
            @emmy.store15
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => <div key={post.id} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              
              
            </div>)}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-600 font-inter mb-4">
            Marque suas fotos com <span className="font-semibold bg-gradient-to-r from-rose-600 via-rose-500 to-rose-700 bg-clip-text text-transparent">#EmmyStore</span> para aparecer aqui!
          </p>
        </div>
      </div>
    </section>;
};
export default InstagramSection;

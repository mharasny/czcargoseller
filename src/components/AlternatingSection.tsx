import React from 'react';

interface AlternatingItemProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  reversed?: boolean;
}

const AlternatingItem: React.FC<AlternatingItemProps> = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  reversed = false 
}) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-16 mb-16 lg:mb-24`}>
      {/* Image Container */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="w-full max-w-md lg:max-w-lg">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h3 className="text-czarny text-2xl lg:text-3xl font-barlow-condensed font-semibold mb-6 leading-tight">
          {title}
        </h3>
        <p className="text-czarny text-lg font-roboto-condensed font-normal leading-6 max-w-lg mx-auto lg:mx-0">
          {description}
        </p>
      </div>
    </div>
  );
};

const AlternatingSection = () => {
  const items = [
    {
      imageSrc: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
      imageAlt: "Zarządzanie flotą pojazdów",
      title: "Efektywne zarządzanie flotą",
      description: "Nasz system umożliwia pełne zarządzanie flotą pojazdów ciężarowych w jednym miejscu. Monitoruj lokalizację, stan techniczny i dostępność wszystkich pojazdów w czasie rzeczywistym."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      imageAlt: "Automatyzacja procesów logistycznych",
      title: "Automatyzacja procesów",
      description: "Automatyzujemy powtarzalne zadania związane z publikowaniem ofert na giełdach transportowych. Oszczędzaj czas i zwiększ efektywność swojego zespołu."
    },
    {
      imageSrc: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&h=400&fit=crop",
      imageAlt: "Integracja z giełdami transportowymi",
      title: "Integracja z giełdami",
      description: "Bezpośrednia integracja z największymi giełdami transportowymi w Polsce i Europie. Trans, TIMOCOM, Teleroute - wszystko w jednym panelu administracyjnym."
    }
  ];

  return (
    <section className="w-full max-w-[1520px] mt-[111px] px-6 lg:px-8 max-md:max-w-full max-md:mt-16">
      <div className="mb-16 lg:mb-20">
        <h2 className="text-czarny text-center text-3xl lg:text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] uppercase mb-4">
          <span className="text-zielony">CARGO</span>seller
          <span className="lowercase"> w praktyce</span>
        </h2>
        <p className="text-czarny text-center text-lg font-roboto-condensed font-normal leading-6 max-w-2xl mx-auto">
          Zobacz jak nasze rozwiązanie wspiera firmy transportowe w codziennej pracy
        </p>
      </div>

      <div className="space-y-0">
        {items.map((item, index) => (
          <AlternatingItem
            key={index}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            title={item.title}
            description={item.description}
            reversed={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default AlternatingSection;
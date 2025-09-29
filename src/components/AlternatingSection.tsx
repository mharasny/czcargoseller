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
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 mb-0`}>
      {/* Image Container */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className="flex items-center justify-center px-8 lg:px-20 py-16 lg:py-[66px] h-full min-h-[300px] lg:min-h-[400px]">
          <img src={imageSrc} alt={imageAlt} className="w-[280px] h-[280px] object-contain rounded-lg" />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className={`flex flex-col justify-center h-full min-h-[300px] lg:min-h-[400px] px-6 lg:px-12 xl:px-20 py-16 lg:py-[110px] ${reversed ? 'lg:pr-6 xl:pr-12' : 'lg:pl-6 xl:pl-12'}`}>
          <h3 className="text-czarny text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mb-6 leading-normal">
            {title}
          </h3>
          <p className="text-czarny text-lg font-roboto-condensed font-normal leading-6 mb-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
const AlternatingSection = () => {
  const items = [{
    imageSrc: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=400&fit=crop",
    imageAlt: "Zarządzanie flotą pojazdów",
    title: "Efektywne zarządzanie flotą",
    description: "Nasz system umożliwia pełne zarządzanie flotą pojazdów ciężarowych w jednym miejscu. Monitoruj lokalizację, stan techniczny i dostępność wszystkich pojazdów w czasie rzeczywistym."
  }, {
    imageSrc: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    imageAlt: "Automatyzacja procesów logistycznych",
    title: "Automatyzacja procesów",
    description: "Automatyzujemy powtarzalne zadania związane z publikowaniem ofert na giełdach transportowych. Oszczędzaj czas i zwiększ efektywność swojego zespołu."
  }, {
    imageSrc: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&h=400&fit=crop",
    imageAlt: "Integracja z giełdami transportowymi",
    title: "Integracja z giełdami",
    description: "Bezpośrednia integracja z największymi giełdami transportowymi w Polsce i Europie. Trans, TIMOCOM, Teleroute - wszystko w jednym panelu administracyjnym."
  }];
  return <section className="w-full max-w-[1520px] mt-[111px] px-6 lg:px-8 max-md:max-w-full max-md:mt-16">
      

      <div className="space-y-0">
        {items.map((item, index) => <AlternatingItem key={index} imageSrc={item.imageSrc} imageAlt={item.imageAlt} title={item.title} description={item.description} reversed={index % 2 !== 0} />)}
      </div>
    </section>;
};
export default AlternatingSection;
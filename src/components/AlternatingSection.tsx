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
  return;
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
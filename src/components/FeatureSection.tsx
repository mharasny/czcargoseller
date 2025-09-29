import React from 'react';
import aiImage from '@/assets/ai.png';
import dotIcon from '@/assets/dot.svg';
interface FeatureItemProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  reversed?: boolean;
}
const FeatureItem: React.FC<FeatureItemProps> = ({
  title,
  description,
  features,
  imageSrc,
  reversed = false
}) => {
  return <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 mb-0`}>
      {/* Image Container */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className="flex items-center justify-center px-8 lg:px-20 py-16 lg:py-[66px] h-full min-h-[400px] lg:min-h-[600px]">
          <img src={imageSrc} alt={title} className="w-full h-auto object-contain rounded-lg" />
        </div>
      </div>
      
      {/* Text Content */}
      <div className="w-full lg:w-1/2 bg-[rgba(248,248,248,1)]">
        <div className={`flex flex-col justify-center h-full min-h-[400px] lg:min-h-[600px] px-6 lg:px-12 xl:px-20 py-16 lg:py-[110px] ${reversed ? 'lg:pr-6 xl:pr-12' : 'lg:pl-6 xl:pl-12'}`}>
          <h3 className="text-czarny text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mb-6 leading-normal">
            {title}
          </h3>
          <p className="text-czarny text-lg font-roboto-condensed font-normal leading-6 mb-6">
            {description}
          </p>
          <div className="space-y-4 mb-6">
            {features.map((feature, index) => <div key={index} className="flex items-start gap-3 text-czarny text-lg font-roboto-condensed font-normal leading-6">
                <img src={dotIcon} alt="" className="w-[19px] h-[21px] flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>)}
          </div>
          <button className="flex items-center gap-2.5 text-zielony leading-none justify-center mt-6 px-6 py-3 rounded-3xl cursor-pointer hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
            <span className="text-zielony font-medium">Czytaj więcej</span>
          </button>
        </div>
      </div>
    </div>;
};
const FeaturesContainer = () => {
  const features = [{
    title: "Publikowanie ładunków spot na sprzedaż",
    description: "W CARGOseller dodajesz ładunek jeden raz i wskazujesz, które narzędzia i kanały sprzedaży aktywujesz.",
    features: ["wysyłka nawet na 3 giełdy transportowe - publikujesz ładunki do giełd w których masz konto", "Mailing 4.0 - automatyczne generowanie maila z listą ładunków do wybranych grup zaufanych podwykonawców"],
    imageSrc: aiImage
  }, {
    title: "Automatyczne szukanie wolnego pojazdu",
    description: "Integracja CARGOseller z TIMOCOM pozwala na automatyczne szukanie wolnych pojazdów w promieniu 100km od miejsca załadunku ładunku, który dodano do CARGOseller.",
    features: ["od teraz nie szukasz wolnych pojazdów manualnie, robi to za Ciebie algorytm", "znalezione wyniki wyświetlane są w kolumnie „Propozycje\" wraz z propozycjami cenowymi z innych systemów"],
    imageSrc: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/6a2c3650fa3ebcf3f3648921ecfb23447821efd6?placeholderIfAbsent=true"
  }, {
    title: "Statystyki",
    description: "Rozproszenie wolumenu ładunków spot na sprzedaż na mailach wielu pracowników uniemożliwia przeprowadzanie analiz. Agregowanie wszystkich ładunków spot na sprzedaż w systemie CARGOseller pozwala na dostarczenie kompletnych statystyk.",
    features: ["statystyki w ujęciu czasowym", "liczbę ładunków wpisanych, sprzedanych"],
    imageSrc: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/7344a91b01a8f33d218c887b695fc9171ac16118?placeholderIfAbsent=true"
  }, {
    title: "AI - szybciej, więcej, skuteczniej",
    description: "Wklej TEKST zapytania, a system wykorzystując AI utworzy gotowe oferty. Dodaj OBRAZ na którym są oferty, a system także utworzy gotowe oferty w czasie szybszym niż człowiek.",
    features: ["Praca z AI to sposób na poprawę efektywności i wyników finansowych bo zyskujesz czas", "Komfort pracy - nie przepisujesz ofert ręcznie"],
    imageSrc: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/ff62aca574dfd74a794aabf55ed061fb5cf379ce?placeholderIfAbsent=true"
  }];
  return <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-16">
      

      <div className="space-y-0">
        {features.map((feature, index) => <FeatureItem key={index} title={feature.title} description={feature.description} features={feature.features} imageSrc={feature.imageSrc} reversed={index % 2 !== 0} />)}
      </div>
    </section>;
};
export default FeaturesContainer;
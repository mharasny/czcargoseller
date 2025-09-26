import React from 'react';

interface FeatureSectionProps {
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imagePosition: 'left' | 'right';
  backgroundColor?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  description,
  features,
  imageSrc,
  imagePosition,
  backgroundColor = 'rgba(248,248,248,1)'
}) => {
  const contentSection = (
    <div className={`bg-[${backgroundColor}] flex min-h-[600px] w-full flex-col items-stretch text-lg text-[#4D4D4D] font-normal leading-6 justify-center mx-auto ${imagePosition === 'left' ? 'pl-6 pr-[120px]' : 'pl-[120px] pr-6'} py-[110px] max-md:max-w-full max-md:px-5 max-md:py-[100px]`}>
      <h3 className="text-[#4D4D4D] text-[42px] font-semibold tracking-[1.26px] max-md:max-w-full">
        {title}
      </h3>
      <p className="text-[#4D4D4D] mt-6 max-md:max-w-full">
        {description}
      </p>
      {features.map((feature, index) => (
        <div key={index} className="flex w-full gap-6 mt-6 max-md:max-w-full">
          <div className="text-[#4D4D4D] flex-1 shrink basis-[0%] max-md:max-w-full">
            {feature}
          </div>
        </div>
      ))}
      <div className="flex items-center gap-2.5 text-[#66BC98] leading-none justify-center mt-6 px-6 py-2 rounded-3xl max-md:px-5 cursor-pointer hover:bg-gray-50 transition-colors">
        <div className="text-[#66BC98] self-stretch my-auto">
          Czytaj więcej
        </div>
      </div>
    </div>
  );

  const imageSection = (
    <div className={`bg-[${backgroundColor}] flex ${imagePosition === 'left' ? 'grow' : 'flex-col items-center justify-center'} w-full ${imagePosition === 'left' ? '' : 'px-20 py-[66px]'} max-md:max-w-full max-md:px-5`}>
      <img
        src={imageSrc}
        alt={title}
        className={`${imagePosition === 'left' ? 'aspect-[1.27] object-contain w-full grow rounded-[0px_0px_0px_0px]' : 'aspect-[1.03] object-contain w-[481px] max-w-full rounded-[0px_0px_0px_0px]'} max-md:max-w-full`}
      />
    </div>
  );

  return (
    <section className="w-full max-w-[1520px] max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {imagePosition === 'left' ? (
          <>
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              {imageSection}
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              {contentSection}
            </div>
          </>
        ) : (
          <>
            <div className="w-6/12 max-md:w-full max-md:ml-0">
              {contentSection}
            </div>
            <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
              {imageSection}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const FeaturesContainer = () => {
  return (
    <div className="w-full">
      <FeatureSection
        title="Publikowanie ładunków spot na sprzedaż"
        description="W CARGOseller dodajesz ładunek jeden raz i wskazujesz, które narzędzia i kanały sprzedaży aktywujesz."
        features={[
          "wysyłka nawet na 3 giełdy transportowe - publikujesz ładunki do giełd w których masz konto,",
          "Mailing 4.0 - automatyczne generowanie maila z listą ładunków do wybranych grup zaufanych podwykonawców..."
        ]}
        imageSrc="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/4bcd5f20a29ebff3fbbcbd204084ecd48c7b643b?placeholderIfAbsent=true"
        imagePosition="left"
      />
      
      <FeatureSection
        title="Automatyczne szukanie wolnego pojazdu"
        description="Integracja CARGOseller z TIMOCOM pozwala na automatyczne szukanie wolnych pojazdów w promieniu 100km od miejsca załadunku ładunku, który dodano do CARGOseller."
        features={[
          "od teraz nie szukasz wolnych pojazdów manualnie, robi to za Ciebie algorytm.",
          "znalezione wyniki wyświetlane są w kolumnie „Propozycje\" wraz z propozycjami cenowymi z innych systemów..."
        ]}
        imageSrc="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/6a2c3650fa3ebcf3f3648921ecfb23447821efd6?placeholderIfAbsent=true"
        imagePosition="right"
      />

      <div className="w-full max-w-[1520px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-6/12 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full">
              <div className="bg-[rgba(248,248,248,1)] flex flex-col items-center justify-center px-20 py-[54px] max-md:max-w-full max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/7344a91b01a8f33d218c887b695fc9171ac16118?placeholderIfAbsent=true"
                  alt="Statystyki"
                  className="aspect-[0.97] object-contain w-[477px] max-w-full rounded-[0px_0px_0px_0px]"
                />
              </div>
              <div className="bg-[rgba(248,248,248,1)] flex min-h-[600px] w-full flex-col items-stretch text-lg text-[#4D4D4D] font-normal leading-none justify-center pl-[120px] pr-6 py-[147px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
                <h3 className="text-[#4D4D4D] text-[42px] font-semibold tracking-[1.26px] max-md:max-w-full">
                  Statystyki
                </h3>
                <p className="text-[#4D4D4D] leading-6 mt-6 max-md:max-w-full">
                  Rozproszenie wolumenu ładunków spot na sprzedaż na mailach wielu pracowników uniemożliwia przeprowadzanie analiz. Agregowanie wszystkich ładunków spot na sprzedaż w systemie CARGOseller pozwala na dostarczenie kompletnych statystyk.
                </p>
                <div className="flex w-full gap-6 mt-6 max-md:max-w-full">
                  <div className="text-[#4D4D4D] flex-1 shrink basis-[0%] max-md:max-w-full">
                    statystyki w ujęciu czasowym
                  </div>
                </div>
                <div className="flex w-full gap-6 mt-6 max-md:max-w-full">
                  <div className="text-[#4D4D4D] flex-1 shrink basis-[0%] max-md:max-w-full">
                    liczbę ładunków wpisanych, sprzedanych...
                  </div>
                </div>
                <div className="flex items-center gap-2.5 text-[#66BC98] justify-center mt-6 px-6 py-2 rounded-3xl max-md:px-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="text-[#66BC98] self-stretch my-auto">
                    Czytaj więcej
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full">
              <div className="bg-[rgba(248,248,248,1)] flex min-h-[600px] w-full flex-col items-stretch text-lg text-[#4D4D4D] font-normal leading-6 justify-center pl-6 pr-[120px] py-[147px] max-md:max-w-full max-md:px-5 max-md:py-[100px]">
                <h3 className="text-[#4D4D4D] text-[42px] font-semibold tracking-[1.26px] max-md:max-w-full">
                  AI - szybciej, więcej, skuteczniej
                </h3>
                <p className="text-[#4D4D4D] mt-6 max-md:max-w-full">
                  Wklej TEKST zapytania, a system wykorzystując AI utworzy gotowe oferty. Dodaj OBRAZ na którym są oferty, a system także utworzy gotowe oferty w czasie szybszym niż człowiek.
                </p>
                <p className="text-[#4D4D4D] mt-6 max-md:max-w-full">
                  Praca z AI to sposób na poprawę efektywności i wyników finansowych bo zyskujesz czas, aby zareagować na więcej zapytań, ale także komfortu pracy, bo nie przepisujesz ofert ręcznie.
                </p>
                <div className="flex items-center gap-2.5 text-[#66BC98] leading-none justify-center mt-6 px-6 py-2 rounded-3xl max-md:px-5 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="text-[#66BC98] self-stretch my-auto">
                    Czytaj więcej
                  </div>
                </div>
              </div>
              <div className="bg-[rgba(248,248,248,1)] flex flex-col items-stretch justify-center px-20 py-[66px] max-md:max-w-full max-md:px-5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/ff62aca574dfd74a794aabf55ed061fb5cf379ce?placeholderIfAbsent=true"
                  alt="AI Features"
                  className="aspect-[1.16] object-contain w-full rounded-[0px_0px_0px_0px] max-md:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesContainer;

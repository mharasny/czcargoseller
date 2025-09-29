import React, { useState } from 'react';

const FunctionalitiesSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Dodawanie ładunku",
    "Zbieranie propozycji cenowych",
    "Lista ładunków",
    "Odświeżanie i usuwanie ładunków",
    "Automatyczny mailing listy ładunków",
    "Ładunki w mojej firmie",
    "Integracje",
    "Statystyki"
  ];

  return (
    <section className="w-full max-w-[1520px] mt-[131px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] max-md:max-w-full">
        Funkcjonalności
      </h2>
      <div className="flex w-full flex-col items-stretch text-lg text-[#4E4D4D] font-normal mt-20 max-md:max-w-full max-md:mt-10">
        <div className="flex w-full items-stretch gap-[40px_60px] flex-wrap rounded-2xl max-md:max-w-full">
          <div className="min-w-60 flex-1 shrink basis-[0%] max-md:max-w-full">
            <div className="flex w-full items-center gap-3 leading-none flex-wrap max-md:max-w-full">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`${
                    activeTab === index
                      ? 'justify-center items-center text-white bg-[#66BC98]'
                      : 'flex px-6 py-2 justify-center items-center gap-2.5 rounded-3xl bg-white text-[#4E4D4D]'
                  } transition-colors hover:bg-[#5aa085] hover:text-white`}
                >
                  <div className="flex px-6 py-2 justify-center items-center gap-2.5 rounded-3xl bg-zielony">
                    {tab}
                  </div>
                </button>
              ))}
            </div>
            <div className="text-czarny font-roboto-condensed text-lg font-normal leading-6 mt-6 max-md:max-w-full">
              Dodaj ładunek szybciej dzięki opcjom szybkiego wybierania,
              archiwum czy szablonom, opublikuj nawet na 3 giełdach, uruchom
              automatyczne odświeżanie ofert i szukanie pojazdów na TIMOCOM,
              opcjonalnie wyślij mailing ze swoją listą ładunków do swoich
              zaufanych przewoźników - wszystko w jednym okienku.
            </div>
          </div>
          <img
            src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/cf86ee60ba6fda8742e6f39675bfa895af0ddf31?placeholderIfAbsent=true"
            alt="Functionalities screenshot"
            className="aspect-[1.8] object-contain w-[897px] shadow-[0px_0px_12px_rgba(0,0,0,0.25)] min-w-60 my-auto rounded-lg max-md:max-w-full"
          />
        </div>
        <div className="self-center flex min-h-[17px] gap-4 mt-10" />
      </div>
    </section>
  );
};

export default FunctionalitiesSection;

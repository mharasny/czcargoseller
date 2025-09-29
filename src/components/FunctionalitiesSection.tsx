import React, { useState } from 'react';
import addLoadingImg from '@/assets/add-loading.png';
import getPropositionImg from '@/assets/get-proposition.jpg';
import loadingListImg from '@/assets/loading-list.png';
import refreshDeleteImg from '@/assets/refresh-delete.png';
import automailingImg from '@/assets/automailing.jpg';
import myloadingsImg from '@/assets/myloadings.png';
import integrationsImg from '@/assets/integrations.jpg';
import statisticsImg from '@/assets/statistics.png';

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

  const tabImages = [
    addLoadingImg,
    getPropositionImg,
    loadingListImg,
    refreshDeleteImg,
    automailingImg,
    myloadingsImg,
    integrationsImg,
    statisticsImg
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
                  className={`flex px-6 py-2 justify-center items-center gap-2.5 rounded-3xl transition-colors hover:bg-[#5aa085] hover:text-white ${
                    activeTab === index
                      ? 'text-white bg-[#66BC98]'
                      : 'bg-white text-[#4E4D4D]'
                  }`}
                >
                  <div className="flex justify-center items-center">
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
            src={tabImages[activeTab]}
            alt={`Screenshot for ${tabs[activeTab]}`}
            className="aspect-[1.8] object-contain w-[897px] shadow-[0px_0px_12px_rgba(0,0,0,0.25)] min-w-60 my-auto rounded-lg max-md:max-w-full"
          />
        </div>
        <div className="self-center flex min-h-[17px] gap-4 mt-10" />
      </div>
    </section>
  );
};

export default FunctionalitiesSection;

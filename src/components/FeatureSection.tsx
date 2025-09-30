import React from 'react';

const FeaturesContainer = () => {
  return (
    <section id="funkcjonalnosci" className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-16">
      <div className="text-center p-8">
        <h2 className="text-czarny text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mb-8">
          Funkcjonalności systemu
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-czarny text-2xl font-barlow-condensed font-semibold mb-4">Publikowanie ładunków</h3>
            <p className="font-roboto-condensed text-muted-foreground">Dodaj ładunek jeden raz i opublikuj na 3 giełdach transportowych.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-czarny text-2xl font-barlow-condensed font-semibold mb-4">Automatyczne szukanie</h3>
            <p className="font-roboto-condensed text-muted-foreground">System automatycznie znajdzie wolne pojazdy w promieniu 100km.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-czarny text-2xl font-barlow-condensed font-semibold mb-4">AI - szybciej, więcej, skuteczniej</h3>
            <p className="font-roboto-condensed text-muted-foreground">Wklej TEKST zapytania, a system wykorzystując AI utworzy gotowe oferty.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="text-czarny text-2xl font-barlow-condensed font-semibold mb-4">Statystyki</h3>
            <p className="font-roboto-condensed text-muted-foreground">Kompletne statystyki wszystkich ładunków w ujęciu czasowym.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesContainer;
import React from 'react';

interface StatCardProps {
  title: string;
  description: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, description, className = "" }) => {
  return (
    <div className={`flex p-8 flex-col items-center gap-4 flex-1 self-stretch rounded-2xl bg-card ${className}`}>
      <div className="text-zielony text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mt-4">
        {title}
      </div>
      <div className="text-czarny text-center text-lg font-roboto-condensed font-normal leading-6 mt-4">
        {description}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      title: "3 giełdy",
      description: "Dodaj ofertę jeden raz, a my opublikujemy ją na giełdach Trans, TIMOCOM, Teleroute"
    },
    {
      title: "70%",
      description: "O tyle zredukujemy czas poświęcany na zarządzanie ofertami na giełdach"
    },
    {
      title: "50k zł",
      description: "To koszt pracy wpisania 67 000 ofert na kilka giełd, zredukujemy to o min. 50%"
    },
    {
      title: "1 x",
      description: "Kliknij raz, aby odświeżyć lub usunąć wiele ofert na 3 giełdach naraz"
    },
    {
      title: "30 min.",
      description: "Tylko tyle zajmie wdrożenie nowego narzędzia w firmie/zespole."
    },
    {
      title: "< 1 min.",
      description: "Opublikujesz ofertę na 3 giełdy + wyślesz mailing z listą ładunków"
    },
    {
      title: "0 min.",
      description: "Nie poświęcisz minuty na szukanie wolnych pojazdów, a zobaczysz wyniki z 2 giełd"
    },
    {
      title: "~ 29zł",
      description: "To średnia opłata miesięczna za konto użytkownika w CARGOseller"
    }
  ];

  return (
    <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] uppercase max-md:max-w-full">
        <span className="font-barlow-condensed text-[38px] leading-[46px] tracking-[1.14px] uppercase font-semibold">
          cargo
        </span>
        <span className="text-zielony font-barlow-condensed text-[42px] font-semibold tracking-[1.26px] lowercase">seller</span>
        <span className="text-czarny font-barlow-condensed text-[42px] font-semibold tracking-[1.26px] lowercase"> w liczbach</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 max-md:mt-10">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
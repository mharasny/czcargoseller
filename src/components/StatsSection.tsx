import React from 'react';

interface StatCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, description, className = "" }) => {
  return (
    <div className={`bg-white flex w-[344px] max-w-full flex-col items-stretch px-6 py-8 rounded-2xl max-md:px-5 ${className}`}>
      <div className="bg-white self-center flex min-h-[88px] w-20 items-center gap-2.5 px-[22px] py-[26px] max-md:px-5">
        <img
          src={icon}
          alt=""
          className="aspect-[1] object-contain w-9 self-stretch my-auto"
        />
      </div>
      <div className="text-[#66BC98] text-center text-[42px] font-semibold tracking-[1.26px] mt-4">
        {title}
      </div>
      <div className="text-[#4D4D4D] text-center text-lg font-normal leading-6 mt-4">
        {description}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/233a022b042a427fa38cf4d792f6cd1d282446d3?placeholderIfAbsent=true",
      title: "3 giełdy",
      description: "Dodaj ofertę jeden raz, a my opublikujemy ją na giełdach Trans, TIMOCOM, Teleroute"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/bc3dbcb0d50ff6959e8266435161f620316c6722?placeholderIfAbsent=true",
      title: "70%",
      description: "O tyle zredukujemy czas poświęcany na zarządzanie ofertami na giełdach"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/fc056badc9f8e827ef7179307ca871d44d554347?placeholderIfAbsent=true",
      title: "50k zł",
      description: "To koszt pracy wpisania 67 000 ofert na kilka giełd, zredukujemy to o min. 50%"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/cf723f7a774bc5beaadf4fb371ee5ab0c410cbdc?placeholderIfAbsent=true",
      title: "1 x",
      description: "Kliknij raz, aby odświeżyć lub usunąć wiele ofert na 3 giełdach naraz"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/ffcf45fbc15b8e9843f72a10c5f8240e4fbe3c12?placeholderIfAbsent=true",
      title: "30 min.",
      description: "Tylko tyle zajmie wdrożenie nowego narzędzia w firmie/zespole."
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/687f9c4ed621bda02f1c09038324d63fbe5135fe?placeholderIfAbsent=true",
      title: "< 1 min.",
      description: "Opublikujesz ofertę na 3 giełdy + wyślesz mailing z listą ładunków"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/ae837320956901d8cb5ca141f65c504f355d2335?placeholderIfAbsent=true",
      title: "0 min.",
      description: "Nie poświęcisz minuty na szukanie wolnych pojazdów, a zobaczysz wyniki z 2 giełd"
    },
    {
      icon: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/85f6a3d998a777002a8cf540c874220ff105c161?placeholderIfAbsent=true",
      title: "~ 29zł",
      description: "To średnia opłata miesięczna za konto użytkownika w CARGOseller"
    }
  ];

  return (
    <section className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-10">
      <h2 className="text-[#4D4D4D] text-center text-[42px] font-semibold tracking-[1.26px] uppercase max-md:max-w-full">
        <span style={{fontSize: '38px', lineHeight: '46px', letterSpacing: '1.14px', textTransform: 'uppercase'}}>
          cargo
        </span>
        <span style={{color: 'rgba(102,188,152,1)'}}>seller</span> w liczbach
      </h2>
      <div className="shadow-[0px_0px_24px_rgba(220,231,236,1)] flex w-full flex-col mt-20 max-md:max-w-full max-md:mt-10">
        <StatCard {...stats[0]} />
        <StatCard {...stats[1]} className="self-center z-10 mt-[-286px] max-md:mt-[-200px]" />
        <StatCard {...stats[2]} className="self-center z-10 mt-[-286px] ml-[196px] max-md:mt-[-200px]" />
        <StatCard {...stats[3]} className="z-10 mt-[-286px] max-md:mt-[-200px]" />
        <StatCard {...stats[4]} className="mt-12 max-md:mt-10" />
        <StatCard {...stats[5]} className="self-center z-10 mt-[-286px] max-md:mt-[-200px]" />
        <StatCard {...stats[6]} className="self-center z-10 mt-[-286px] ml-[196px] max-md:mt-[-200px]" />
        <StatCard {...stats[7]} className="z-10 mt-[-286px] max-md:mt-[-200px]" />
      </div>
    </section>
  );
};

export default StatsSection;

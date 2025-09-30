import React from 'react';

const PricingSection = () => {
  return (
    <section id="cennik" className="w-full max-w-[1520px] mt-[111px] max-md:max-w-full max-md:mt-16 px-8">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] mb-12">
        Cennik
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-2xl font-barlow-condensed font-bold text-czarny mb-4">Start</h3>
          <p className="text-4xl font-barlow-condensed font-light text-czarny mb-4">29 zł</p>
          <p className="text-muted-foreground font-roboto-condensed">miesięcznie za użytkownika</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
import React from 'react';

const ContactSection = () => {
  return (
    <footer id="kontakt" className="flex w-full max-w-[1520px] flex-col items-center bg-[#4D4D4D] mt-[316px] pt-20 pb-[33px] px-20 rounded-2xl max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="flex w-[1200px] max-w-full flex-col items-stretch">
        <h2 className="text-white text-center text-[32px] font-barlow-condensed font-semibold mb-8">
          Kontakt
        </h2>
        <div className="text-white text-center font-roboto-condensed">
          <p className="text-lg mb-2">kontakt@cargoseller.pl</p>
          <p className="mb-2">CS SOFT Monika Janczukowicz</p>
          <p>Szydłowo 189, 64-930 Szydłowo</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
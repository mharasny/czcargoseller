import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full max-w-[1421px] mt-[131px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-9/12 max-md:w-full max-md:ml-0">
          <div className="max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
              <div className="w-[78%] max-md:w-full max-md:ml-0">
                <div className="mr-[-43px] grow font-semibold mt-12 max-md:max-w-full max-md:mt-10">
                  <h1 className="text-[#4d4d4d] font-barlow-condensed text-[64px] font-[600] leading-normal tracking-[1.28px] max-md:max-w-full max-md:text-[40px]">
                    Spot Freight <br />
                    Management System. <br />
                    <span className="font-barlow-condensed text-[64px] font-[600] leading-normal tracking-[1.28px]" style={{color: '#66BC98'}}>Nie TMS.</span>
                  </h1>
                  <p className="text-[#4D4D4D] text-[42px] tracking-[1.26px] mt-6 max-md:max-w-full">
                    Integrator systemów do sprzedaży <br />
                    ładunków spotowych.
                  </p>
                  <button className="justify-center items-stretch flex min-h-[51px] w-[166px] max-w-full flex-col text-lg text-white font-normal text-center leading-none bg-[#66BC98] mt-6 px-8 py-3.5 rounded-3xl max-md:px-5 hover:bg-[#5aa085] transition-colors">
                    Zobacz więcej
                  </button>
                </div>
              </div>
              <div className="w-[22%] ml-5 max-md:w-full max-md:ml-0">
                <img
                  src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/4ee43c09427b08774adab3952aa188bc74b5e914?placeholderIfAbsent=true"
                  alt="System illustration"
                  className="aspect-[0.93] object-contain w-[206px] shrink-0 max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-center text-[15px] text-[rgba(102,188,152,1)] font-bold whitespace-nowrap mt-[38px] max-md:mt-10">
            <img
              src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/741988edfe8b59b7646b862cf2e8cf2257e7b7ed?placeholderIfAbsent=true"
              alt="Mailing icon"
              className="aspect-[1] object-contain w-[60px]"
            />
            <div>Mailing</div>
            <img
              src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/22f6e2dc3cabb25286d2c61c3ae4fd2ed959adfb?placeholderIfAbsent=true"
              alt="Additional illustration"
              className="aspect-[0.92] object-contain w-full self-stretch mt-[154px] max-md:mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

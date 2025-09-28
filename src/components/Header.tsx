import React from 'react';

const Header = () => {
  return (
    <header className="bg-[rgba(244,244,244,1)] flex flex-col overflow-hidden items-center py-[26px]">
      <nav className="flex items-center overflow-hidden text-lg text-white font-normal leading-none flex-wrap max-md:max-w-full h-[60px]">
        <div className="items-center self-stretch flex min-w-60 h-[60px] gap-2.5 text-2xl text-white font-bold uppercase w-[693px] bg-[#4D4D4D] px-10 py-4 rounded-[16px_0_0_16px] max-md:max-w-full max-md:px-5">
          <div className="self-stretch my-auto">
            <span style={{fontFamily: 'Barlow Condensed, -apple-system, Roboto, Helvetica, sans-serif', textTransform: 'uppercase'}}>
              cargo
            </span>
            <span style={{fontFamily: 'Barlow Condensed, -apple-system, Roboto, Helvetica, sans-serif', color: 'rgba(102,188,152,1)'}}>
              seller
            </span>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/f4cf39285a5f4437f931fff00bfa00b707db0178?placeholderIfAbsent=true"
          alt="Logo"
          className="w-[103.96px] h-[121.782px] shrink-0 aspect-[103.96/121.78] rounded-[20px] border border-black object-cover bg-gray-300 relative z-10"
        />
        <div className="self-stretch flex w-[145px] shrink-0 h-[60px] bg-[#4D4D4D]" />
        <div className="justify-center items-center self-stretch flex flex-col w-[122px] h-[60px] bg-[#4D4D4D] px-2.5">
          <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
            <div className="self-stretch my-auto">
              O systemie 
            </div>
          </div>
        </div>
        <div className="justify-center items-center self-stretch flex flex-col w-[89px] h-[60px] bg-[#4D4D4D] px-2.5">
          <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
            <div className="self-stretch my-auto">
              Cennik 
            </div>
          </div>
        </div>
        <div className="justify-center items-center self-stretch flex flex-col whitespace-nowrap w-[95px] h-[60px] bg-[#4D4D4D] px-2.5">
          <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
            <div className="self-stretch my-auto">
              Kontakt
            </div>
          </div>
        </div>
        <div className="justify-center items-center self-stretch flex h-[60px] flex-col w-[124px] bg-[#4D4D4D] px-2.5">
          <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
            <div className="self-stretch my-auto">
              Załóż konto
            </div>
          </div>
        </div>
        <div className="items-center self-stretch flex flex-col text-[#66BC98] font-bold justify-center w-[122px] h-[60px] bg-[#4D4D4D] px-2.5 rounded-[0_8px_8px_0]">
          <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
            <div className="text-[#66BC98] self-stretch my-auto">
              Zaloguj się
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent inline-flex overflow-hidden items-center justify-center py-[26px] fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center overflow-hidden text-lg text-white font-normal leading-none flex-wrap max-md:max-w-full">
        <div className="items-center flex min-w-60 h-[60px] gap-2.5 text-2xl text-white font-bold uppercase w-[693px] bg-[#4D4D4D] px-10 py-2.5 rounded-[16px_0_0_16px] max-md:max-w-full max-md:px-5 max-md:w-auto max-md:flex-1">
          <div className="self-stretch my-auto">
            <span className="text-white font-barlow-condensed text-2xl font-bold uppercase leading-normal">
              cargo
            </span>
            <span className="font-barlow-condensed text-2xl font-bold leading-normal lowercase" style={{color: '#66BC98'}}>
              seller
            </span>
          </div>
        </div>
        <img
          src="https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/f4cf39285a5f4437f931fff00bfa00b707db0178?placeholderIfAbsent=true"
          alt="Logo"
          className="aspect-[1.2] object-contain w-[120px] self-stretch shrink-0 my-auto rounded-[0px_0px_0px_0px] max-md:hidden"
        />
        <div className="self-stretch flex w-[145px] shrink-0 h-[60px] bg-[#4D4D4D] my-auto max-md:hidden" />
        
        {/* Desktop Menu Items */}
        <div className="hidden md:flex">
          <div className="justify-center items-start flex flex-col w-[122px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5">
            <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
              <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                O systemie 
              </div>
            </div>
          </div>
          <div className="justify-center items-start flex flex-col w-[89px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5">
            <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
              <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                Cennik 
              </div>
            </div>
          </div>
          <div className="justify-center items-start flex flex-col w-[95px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5">
            <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
              <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                Kontakt
              </div>
            </div>
          </div>
          <div className="justify-center items-start flex h-[60px] flex-col w-[124px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5">
            <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
              <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                Załóż konto
              </div>
            </div>
          </div>
          <div className="items-start flex flex-col text-[#66BC98] font-bold justify-center w-[122px] bg-[#4D4D4D] px-2.5 py-2 gap-2.5 rounded-[0_8px_8px_0]">
            <div className="flex w-full items-center gap-2.5 justify-center p-2.5">
              <div className="font-roboto-condensed text-lg font-bold leading-6" style={{color: '#66BC98'}}>
                Zaloguj się
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center justify-center w-[60px] h-[60px] bg-[#4D4D4D] rounded-[0_8px_8px_0]">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center w-full h-full focus:outline-none"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-white transition-transform duration-300" />
              )}
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[112px] bg-[#4D4D4D] z-40 animate-fade-in">
          <div className="flex flex-col">
            <div className="flex flex-col border-b border-gray-600">
              <div className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                  O systemie 
                </div>
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-600">
              <div className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                  Cennik 
                </div>
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-600">
              <div className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                  Kontakt
                </div>
              </div>
            </div>
            <div className="flex flex-col border-b border-gray-600">
              <div className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="text-white font-roboto-condensed text-lg font-normal leading-6">
                  Załóż konto
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-full items-center justify-center p-4 hover:bg-gray-600 transition-colors">
                <div className="font-roboto-condensed text-lg font-bold leading-6" style={{color: '#66BC98'}}>
                  Zaloguj się
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

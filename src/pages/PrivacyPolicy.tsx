import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[rgba(244,244,244,1)] min-h-screen flex flex-col items-center py-[26px]">
      <Header />

      <main className="w-full max-w-[1200px] px-8 py-16 mt-[120px]">
        <nav className="text-sm text-gray-600 mb-8">
          <Link to="/" className="hover:text-primary">Strona główna</Link>
          <span className="mx-2">&gt;&gt;</span>
          <span>Polityka Prywatności</span>
        </nav>

        <h1 className="text-4xl font-bold text-[#4D4D4D] mb-8">Polityka prywatności</h1>

        <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-[#4D4D4D] mb-4">1. Kim jesteśmy</h2>
            <p className="text-gray-700">
              Niniejsza polityka dotyczy Serwisu www, funkcjonującego pod adresem www.cargoseller.pl
            </p>
            <div className="mt-4">
              <strong>CS SOFT Monika Janczukowicz</strong><br/>
              Szydłowo 189, 64-930 Szydłowo<br/>
              NIP: 7651604754 REGON: 302309608<br/>
              kontakt@cargoseller.pl
            </div>
          </section>
        </div>
      </main>

      <ContactSection />
    </div>
  );
};

export default PrivacyPolicy;
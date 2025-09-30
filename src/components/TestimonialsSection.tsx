import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';


const TestimonialsSection = () => {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const logos = [
    {
      src: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/e54809a9ca5b4d37fe2d3a3634f3b3d5bff3d354?placeholderIfAbsent=true",
      className: "aspect-[4.03] object-contain w-[121px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/14ca470046937465c78f0d881456ede36c07a8d8?placeholderIfAbsent=true",
      className: "aspect-[2.73] object-contain w-[82px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/c88810ea61d6626a084a2c675ef1df3ea44e4f5c?placeholderIfAbsent=true",
      className: "aspect-[5] object-contain w-[150px]"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/73b29f1caf414e8dadec59a4cd659ee3/253f82e3cdd11c3e44a7d49dea68ce1acfa1ec94?placeholderIfAbsent=true",
      className: "aspect-[3.7] object-contain w-[148px]"
    }
  ];

  return (
    <section className="bg-[rgba(249,249,249,1)] self-stretch w-full mt-[135px] px-[200px] py-[100px] max-md:max-w-full max-md:mt-10 max-md:px-5">
      <h2 className="text-czarny text-center text-[42px] font-barlow-condensed font-semibold tracking-[1.26px] max-md:max-w-full">
        Z systemu korzysta już ponad{" "}
        <span style={{color: 'rgba(102,188,152,1)'}}>800 spedytorów</span>,
        zaufali nam m.in.:
      </h2>
      <div className="overflow-hidden mt-20 max-md:mt-10" ref={emblaRef}>
        <div className="flex gap-[100px] max-md:gap-[50px]">
          {logos.map((logo, index) => (
            <div key={index} className="flex-[0_0_auto] flex items-center justify-center min-w-[150px]">
              <img
                src={logo.src}
                alt={`Client logo ${index + 1}`}
                className={`${logo.className} object-contain`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

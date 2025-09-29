import React from 'react';

const TestimonialsSection = () => {
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
      <div className="bg-blend-luminosity flex min-h-[50px] w-full items-center gap-[40px_100px] justify-between mt-20 max-md:max-w-full max-md:mt-10">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={`Client logo ${index + 1}`}
            className={`${logo.className} self-stretch shrink-0 my-auto`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

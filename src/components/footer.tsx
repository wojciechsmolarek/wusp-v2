import Facebook from "../icons/facebook.tsx";

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">

        <div className="col-span-1 md:col-span-2">
          <a href="/">
            <img src="/logo-wusp.svg" alt="WUSP Jarocin" width="150" height="120" loading="lazy" />
          </a>
          <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray pt-[18px] pb-[33px]">
            Szwalnia tapicerki meblowej. Gwarancja wykonanania. Zapraszamy do współpracy.
          </p>
          <div className="flex gap-5 md:gap-[54px]">
            <a href="/">
              <Facebook />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <span className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Strony informacyjne
          </span>
          <div className="flex flex-col gap-6">
            <a
              href="/o-nas"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              O nas
            </a>
            <a
              href="/regulamin"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Regulamin
            </a>
            <a
              href="/polityka-prywatnosci"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Polityka prywatności
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <span className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            Nasza oferta
          </span>
          <div className="flex flex-col gap-6">
            <a
              href="/oferta"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Oferta
            </a>
            <a
              href="/realizacje"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Realizacje
            </a>
            <a
              href="/wspolpraca"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Współpraca
            </a>
          </div>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <span className="text-primary-200 font-dm text-[22px] lg:text-[25px] leading-loose">
            <a
              href="/contact"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              Kontakt
            </a>
          </span>
          <div className="flex flex-col gap-6">
            <p className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray">
              Ul. Wojska Polskiego 47, 63-200 Jarocin
            </p>
            <a
              href="mailto:kontakt@wusp-jarocin.pl"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              kontakt@wusp-jarocin.pl
            </a>
            <a
              href="tel:+48607442592"
              className="tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost text-text-gray"
            >
              +48 607 442 592
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

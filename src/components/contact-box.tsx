import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";

const ContactInfo = () => {
  return (
    <div className="w-full max-w-[480px] mx-auto bg-primary-300 rounded-[36px] shadow-lg px-6 py-10 sm:px-8 sm:py-12 flex flex-col gap-8">
      <div className="mb-2 flex flex-col items-center">
        <h2 className="text-[28px] font-dm text-primary-200 text-center tracking-wide leading-tight">
          Dane kontaktowe
        </h2>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1 text-lg font-jost tracking-tight text-text-gray-200">
          <span className="font-semibold text-primary-200">
            Wytwórczo Usługowa Spółdzielnia Pracy Jarocin
          </span>
          <span>ul. Wojska Polskiego 47, 63-200 Jarocin</span>
          <span>NIP: 6170001384</span>
          <span>KRS: 0000146398</span>
          <span>REGON: 000843052</span>
        </div>
        <div className="my-2 border-t border-primary-200/30" />
        <a
          href="mailto:kontakt@wusp-jarocin.pl"
          className="flex items-center gap-4 text-lg font-jost tracking-tight text-text-gray-200 hover:text-primary-200 transition-colors duration-200 justify-center lg:justify-start font-semibold"
        >
          <Mail className="w-7 h-7 text-primary-200" />
          kontakt@wusp-jarocin.pl
        </a>
        <a
          href="tel:+48607442592"
          className="flex items-center gap-4 text-lg font-jost tracking-tight text-text-gray-200 hover:text-primary-200 transition-colors duration-200 justify-center lg:justify-start font-semibold"
        >
          <Phone className="w-7 h-7 text-primary-200" />
          +48 607 442 592
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
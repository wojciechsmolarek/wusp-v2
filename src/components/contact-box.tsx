import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";

const ContactInfo = () => {
  return (
    <div className="card card-lg w-full max-w-[480px] mx-auto bg-primary-300 rounded-[36px] shadow-lg px-8 py-12 flex flex-col gap-8">
      <div className="card-header mb-2">
        <h2 className="text-[28px] lg:text-[36px] font-dm text-primary-200 text-center tracking-wide leading-tight">
          Dane kontaktowe
        </h2>
      </div>
      <div className="card-body flex flex-col gap-7">
        <a
          href="mailto:kontakt@wusp-jarocin.pl"
          className="flex items-center gap-4 text-xl font-jost tracking-tight text-text-gray-200 hover:text-primary-200 transition-colors duration-200 justify-center"
        >
          <Mail className="w-7 h-7 text-primary-200" />
          kontakt@wusp-jarocin.pl
        </a>
        <a
          href="tel:+48607442592"
          className="flex items-center gap-4 text-xl font-jost tracking-tight text-text-gray-200 hover:text-primary-200 transition-colors duration-200 justify-center"
        >
          <Phone className="w-7 h-7 text-primary-200" />
          +48 607 442 592
        </a>
        <div className="flex flex-col gap-1 text-center text-lg font-jost tracking-tight text-text-gray-200">
          <span className="font-semibold text-primary-200">
            Wytwórczo Usługowa Spółdzielnia Pracy Jarocin
          </span>
          <span>ul. Wojska Polskiego 47, 63-200 Jarocin</span>
          <span>NIP: 6170001384</span>
          <span>KRS: 0000146398</span>
          <span>REGON: 000843052</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
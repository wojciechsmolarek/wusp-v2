import Mail from "../icons/mail.tsx";
import Phone from "../icons/phone.tsx";
import Web from "../icons/web.tsx";
import ArrowPri from "../icons/arrow-pri.tsx";

const ContactInfo = () => {
  return (
    <div className="col-span-1 bg-primary-300 rounded-[30px] px-8 py-[76px] flex flex-col gap-[30px] w-full">
      <span className="flex flex-col xl:flex-row gap-4 items-center text-xl text-center xl:text-left font-jost tracking-tight">
        {" "}
        <Mail /> kontakt@wusp-jarocin.pl
      </span>
      <span className="flex flex-col xl:flex-row gap-4 items-center text-xl text-center xl:text-left font-jost tracking-tight">
        {" "}
        <Phone /> +48 607 442 592
      </span>
      <span className="flex flex-col xl:flex-row gap-4 items-center text-xl text-center xl:text-left font-jost tracking-tight">
        {" "}
        <Web /> ul. Wojska Polskiego 47, 63-200 Jarocin
      </span>
      <span className="flex flex-col xl:flex-row gap-4 items-center text-xl text-center xl:text-left font-jost tracking-tight">
        {" "}
        <ArrowPri /> NIP: 6170001384<br/>KRS: 0000146398<br/>REGON: 000843052
      </span>
    </div>
  );
};

export default ContactInfo;

import React from "react";
import Facebook from "../icons/facebook.tsx";

// Dane dla sekcji stopki
const footerSections = [
  {
    title: "Strony informacyjne",
    links: [
      { href: "/o-nas", label: "O nas" },
      { href: "/regulamin", label: "Regulamin" },
      { href: "/polityka-prywatnosci", label: "Polityka prywatności" }
    ]
  },
  {
    title: "Nasza oferta",
    links: [
      { href: "/oferta", label: "Oferta" },
      { href: "/realizacje", label: "Realizacje" },
      { href: "/park-maszynowy", label: "Park maszynowy" },
      { href: "/wspolpraca", label: "Współpraca" }
    ]
  },
  {
    title: "Kontakt",
    isContact: true,
    links: [
      { 
        href: "https://g.co/kgs/hbMyNQs", 
        label: "ul. Wojska Polskiego 47, 63-200 Jarocin",
        target: "_blank",
        rel: "noopener noreferrer"
      },
      { 
        href: "mailto:kontakt@wusp-jarocin.pl", 
        label: "kontakt@wusp-jarocin.pl" 
      },
      { 
        href: "tel:+48607442592", 
        label: "+48 607 442 592" 
      }
    ]
  }
];

// Komponent linku w stopce
const FooterLink = ({ 
  href, 
  label, 
  isText = false,
  target,
  rel
}: { 
  href: string, 
  label: string, 
  isText?: boolean,
  target?: string,
  rel?: string
}) => {
  const baseClasses = "tracking-tight text-base lg:text-[20px] lg:leading-[25px] font-jost text-text-gray";
  
  if (isText) {
    return <p className={baseClasses}>{label}</p>;
  }
  
  return (
    <a 
      href={href} 
      className={`${baseClasses} inline-block hover:text-primary-200 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200 focus-visible:rounded-sm`}
      target={target}
      rel={rel}
    >
      <span className="relative group">
        {label}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-200 transform scale-x-0 
                       transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 group-focus-visible:scale-x-100"></span>
      </span>
    </a>
  );
};

// Komponent sekcji stopki
const FooterSection = ({ 
  title, 
  links, 
  isContact = false 
}: { 
  title: string, 
  links: Array<{ 
    href: string, 
    label: string, 
    isText?: boolean,
    target?: string,
    rel?: string
  }>, 
  isContact?: boolean 
}) => (
  <div className="col-span-1 flex flex-col gap-4">
    <span className="text-primary-200 font-dm text-[22px] lg:text-[20px] leading-loose">
      {isContact ? (
        <a 
          href="/kontakt" 
          className="tracking-tight inline-block text-base lg:text-[20px] lg:leading-[25px] font-jost text-text-gray hover:text-primary-200 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200 focus-visible:rounded-sm"
        >
          <span className="relative group">
            {title}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-200 transform scale-x-0 
                           transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 group-focus-visible:scale-x-100"></span>
          </span>
        </a>
      ) : (
        title
      )}
    </span>
    <div className="flex flex-col gap-6">
      {links.map((link, index) => (
        <FooterLink 
          key={index} 
          href={link.href} 
          label={link.label} 
          isText={link.isText}
          target={link.target}
          rel={link.rel}
        />
      ))}
    </div>
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-[135px] w-full" aria-label="Stopka">
      <div className="w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-[135px] grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 gap-6">
        <div className="col-span-1 md:col-span-2">
          <a 
            href="/" 
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200 focus-visible:rounded-sm inline-block"
            aria-label="Strona główna WUSP Jarocin"
          >
            <img 
              src="/logo-wusp.svg" 
              alt="WUSP Jarocin" 
              width="150" 
              height="120" 
              loading="lazy" 
            />
          </a>
          <p className="tracking-tight text-base lg:text-[20px] lg:leading-[25px] font-jost text-text-gray pt-[18px] pb-[33px]">
            Szwalnia tapicerki meblowej. Gwarancja wykonanania. Zapraszamy do współpracy.
          </p>
          <div className="flex gap-5 md:gap-[54px]">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200 focus-visible:rounded-sm"
              aria-label="Odwiedź naszą stronę na Facebooku"
            >
              <Facebook />
            </a>
          </div>
        </div>
        
        {footerSections.map((section, index) => (
          <FooterSection 
            key={index} 
            title={section.title} 
            links={section.links} 
            isContact={section.isContact} 
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
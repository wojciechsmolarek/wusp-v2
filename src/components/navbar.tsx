import React, { useState, useEffect } from "react";
import Logo from "../icons/logo.tsx";
import useMediaQuery from "../utils/useMediaQuery.ts";
import { motion } from "framer-motion";

const menuItems = [
  { href: "/", label: "Strona główna" },
  { href: "/o-nas", label: "O nas" },
  { href: "/oferta", label: "Oferta" },
  { href: "/realizacje", label: "Realizacje" },
  { href: "/wspolpraca", label: "Współpraca" },
  { href: "/kontakt", label: "Kontakt" },
];

const Navbar = () => {
  const [toggled, setToggled] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : "/";

  const NavLink = ({ href, label, isMobile = false }: { href: string, label: string, isMobile?: boolean }) => (
    <a
      href={href}
      className={`text-xl leading-6 font-jost text-primary-200 relative group focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200 focus-visible:rounded-sm
                  ${isMobile ? 'py-3' : 'py-1'}`}
      aria-current={currentPath === href ? "page" : undefined}
    >
      <span className={currentPath === href ? "font-medium" : ""}>
        {label}
      </span>
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-200 transform scale-x-0 
                      transition-transform duration-300 ease-out origin-left group-hover:scale-x-100 group-focus-visible:scale-x-100"></span>
    </a>
  );

  if (!isClient) {
    return <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-11 flex justify-between items-center">
      <div><Logo /></div>
      <div className="invisible"></div>
    </div>;
  }

  return (
    <div className="max-w-[1200px] px-12 xl:px-0 m-auto w-full py-11 flex justify-between items-center">
      <a href="/" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200 focus-visible:rounded-sm">
        <Logo />
      </a>

      {matches && (
        <nav className="flex flex-row gap-6" aria-label="Główne menu nawigacyjne">
          {menuItems.map(({ href, label }) => (
            <NavLink key={href} href={href} label={label} />
          ))}
        </nav>
      )}

      {!matches && (
        <button
          onClick={() => setToggled(!toggled)}
          className="space-y-1 cursor-pointer z-50 relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-200 focus-visible:rounded-sm p-2"
          aria-label={toggled ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={toggled}
        >
          <motion.span
            animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
            className="block h-0.5 w-8 bg-black"
          ></motion.span>
          <motion.span
            animate={{ width: toggled ? 0 : 24 }}
            className="block h-0.5 w-6 bg-black"
          ></motion.span>
          <motion.span
            animate={{
              rotateZ: toggled ? -45 : 0,
              y: toggled ? -8 : 0,
              width: toggled ? 32 : 16,
            }}
            className="block h-0.5 w-4 bg-black"
          ></motion.span>
        </button>
      )}

      {!matches && (
        <motion.nav
          initial={{ opacity: 0, x: "-100%" }}
          animate={{ 
            opacity: toggled ? 1 : 0,
            x: toggled ? 0 : "-100%",
            display: toggled ? "flex" : "none"
          }}
          transition={{ duration: 0.3 }}
          className="flex-col fixed top-0 left-0 h-screen bg-white w-[75%] md:w-[90%] 
                    text-black z-40 gap-6 items-center justify-center"
          aria-label="Menu nawigacyjne mobilne"
          aria-hidden={!toggled}
        >
          <div className="flex flex-col items-center gap-8">
            {menuItems.map(({ href, label }) => (
              <NavLink key={href} href={href} label={label} isMobile />
            ))}
          </div>
        </motion.nav>
      )}

      {toggled && !matches && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black z-30"
          onClick={() => setToggled(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Navbar;

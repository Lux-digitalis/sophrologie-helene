import React from "react";
import navbarStyle from "./Navbar.module.sass";
import Logo from "../../Assets/Logo.svg";

export default function Navbar(): JSX.Element {
  const SECTIONS = [
    {name: "Hélène Grass", href: ""},
    {name: "La thérapie", href: ""},
    {name: "Mes qualifications", href: ""},
    {name: "Mon tarif", href: ""},
    {name: "Me contacter", href: ""},
    {name: "Se connecter", href: ""},
  ];

  return (
    <div className={navbarStyle.navbar}>
      <img src={Logo} alt="Logo" className={navbarStyle.logo} />
      {SECTIONS.map((section, key) => (
        <a href={section.href} key={key} className={navbarStyle.listElement}>
          {section.name}
        </a>
      ))}
    </div>
  );
}

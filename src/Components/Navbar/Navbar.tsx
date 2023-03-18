import React from "react";
import navbarStyle from "./Navbar.module.sass";
import Logo from "../../Assets/Logo.svg";

export default function Navbar(): JSX.Element {
  const [IS_CHECK, SetCheck] = React.useState<boolean>(false);

  const TEST = () => {
    SetCheck((currentValue) => !currentValue);
  };

  const SECTIONS: Array<{name: string; href: string}> = [
    {name: "Hélène Grass", href: ""},
    {name: "La thérapie", href: ""},
    {name: "Mes qualifications", href: ""},
    {name: "Mon tarif", href: ""},
    {name: "Me contacter", href: ""},
    {name: "Se connecter", href: ""},
  ];

  return (
    <div id={navbarStyle.navbar}>
      <div id={navbarStyle.navigation}>
        <img src={Logo} alt="Logo" className={navbarStyle.logo} />
        {SECTIONS.map((section, key) => (
          <a href={section.href} key={key} className={navbarStyle.listElement}>
            {section.name}
          </a>
        ))}
        <input type="checkbox" id={navbarStyle.burgerCheck} onClick={TEST} />
        <div className={navbarStyle.burgerLines}>
          {[...Array(3)].map((e, i) => (
            <span className={navbarStyle.burgerLine} key={i}></span>
          ))}
        </div>
      </div>
      {IS_CHECK
        ? SECTIONS.slice(1).map((section, key) => (
            <a
              href={section.href}
              key={key}
              className={navbarStyle.listElement}
              style={{display: "flex", margin: "0 auto 0 auto"}}
            >
              {section.name}
            </a>
          ))
        : null}
    </div>
  );
}

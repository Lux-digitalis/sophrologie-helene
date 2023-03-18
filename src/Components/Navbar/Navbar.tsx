import React from "react";
import navbarStyle from "./Navbar.module.sass";
import Logo from "../../Assets/Logo.svg";

function debounce(fn: () => void, ms: number) {
  let timer: string | number | NodeJS.Timeout | undefined | null;
  return () => {
    clearTimeout(timer as number | undefined);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default function Navbar(props: INavbarProps): JSX.Element {
  const {IS_CHECK, HandleChangeCheckValue} = props;

  const [DIMENSIONS, SetDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize(): void {
      SetDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

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
        <input
          type="checkbox"
          id={navbarStyle.burgerCheck}
          onClick={HandleChangeCheckValue}
        />
        <div className={navbarStyle.burgerLines}>
          {[...Array(3)].map((e, i) => (
            <span className={navbarStyle.burgerLine} key={i}></span>
          ))}
        </div>
      </div>
      <div
        id={navbarStyle.menuMobile}
        style={{
          height:
            IS_CHECK && DIMENSIONS.width < 1350
              ? "calc(100vh - 260px)"
              : "auto",
        }}
      >
        {IS_CHECK && DIMENSIONS.width < 1350
          ? SECTIONS.slice(1).map((section, key) => (
              <a
                href={section.href}
                key={key}
                className={navbarStyle.listElement}
                style={{
                  display: "flex",
                  textAlign: "center",
                  margin: "0 auto 0 auto",
                }}
              >
                {section.name}
              </a>
            ))
          : null}
      </div>
    </div>
  );
}

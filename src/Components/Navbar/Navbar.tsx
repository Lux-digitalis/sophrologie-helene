import React from "react";
import navbarStyle from "./Navbar.module.sass";
import Logo from "../../Assets/Logo.svg";

function Debounce(fn: () => void, ms: number): () => void {
  const Self: (fn: () => void, ms: number) => () => void = Debounce;
  const ARGS: Array<number | (() => void)> = [fn, ms];
  let timer: NodeJS.Timeout | number | string | null | undefined;
  return (): void => {
    clearTimeout(timer as number | undefined);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(Self, ARGS as []);
    }, ms);
  };
}

export default function Navbar(props: Readonly<INavbarProps>): JSX.Element {
  const {isCheck, HandleChangeCheckValue} = props;

  const [DIMENSIONS, SetDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    const DebouncedHandleResize: () => void = Debounce(
      function HandleResize(): void {
        SetDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      },
      1000
    );

    window.addEventListener("resize", DebouncedHandleResize);

    return () => {
      window.removeEventListener("resize", DebouncedHandleResize);
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
          {[null, null, null].map((e, i) => (
            <span className={navbarStyle.burgerLine} key={i}></span>
          ))}
        </div>
      </div>
      <div
        id={navbarStyle.menuMobile}
        style={{
          height:
            isCheck && DIMENSIONS.width < 1350 ? "calc(100vh - 260px)" : "auto",
        }}
      >
        {isCheck && DIMENSIONS.width < 1350
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

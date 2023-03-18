import React from "react";
import footerStyle from "./Footer.module.sass";

export default function Footer(): JSX.Element {
  const FOOTERTEXT = [
    "07 51 61 34 81",
    "Chem. de l'Ermitage, 25000 Besançon, France",
    "© 2023 par Hélène Grass Sophrologue",
  ];

  return (
    <div id={footerStyle.footer}>
      {FOOTERTEXT.map((element, key) => (
        <p key={key} className={footerStyle.footerText}>
          {element}
        </p>
      ))}
    </div>
  );
}

import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App(): JSX.Element {
  const [IS_CHECK, SetCheck] = React.useState<boolean>(false);

  const HandleChangeCheckValue = (): void => {
    SetCheck((currentValue) => !currentValue);
  };

  return (
    <div>
      <Navbar
        IS_CHECK={IS_CHECK}
        HandleChangeCheckValue={HandleChangeCheckValue}
      />
      <Footer />
    </div>
  );
}

export default App;

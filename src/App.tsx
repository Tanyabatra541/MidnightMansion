import * as React from "react";
import { LoginButton } from "./components/LoginButton";
import { LoginModal } from "./components/LoginModal";
import "./App.scss";

export const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="container">
      <h1 className="welcome">welcome!</h1>

      <LoginButton onClick={() => setIsOpen(true)} />

      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default App;
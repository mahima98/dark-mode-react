import { proxy, useSnapshot } from "valtio";
import { useState } from "react";
import { Switch } from "@headlessui/react";
import logo from "./logo.svg";
import "./App.css";

const state = proxy({
  appColor: "",
});

function App() {
  const snap = useSnapshot(state);
  const [enabled, setEnabled] = useState(false);
  const dark = "dark";
  const setColor = () => {
    if (enabled === true) {
      state.appColor = dark;
      return state.appColor;
    } else {
      state.appColor = "";
      return state.appColor;
    }
  };
  setColor();
  console.log("enabled", enabled);
  console.log("appColor", state.appColor);

  return (
    <div className={`${snap.appColor}`} id="app">
      <header className="App-header bg-white dark:bg-black">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex flex-shrink-0 h-[38px] w-[74px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
          />
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-[#61dafb] dark:text-white m-10">
          Toggle for dark mode!
        </p>
      </header>
    </div>
  );
}

export default App;

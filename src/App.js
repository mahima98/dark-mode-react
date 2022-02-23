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
          relative inline-flex h-[38px] w-[74px] flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
        <img src={logo} className="App-logo" alt="logo" />
        <p className="card m-10 text-[#61dafb] dark:text-white">
          Toggle for dark mode!
        </p>
        <div className="flex h-8 w-48 items-center justify-center bg-gray-700">
          <div className="isolate flex items-center justify-center -space-x-6">
            <div className="h-16 w-16 rounded-full bg-purple-500"></div>
            <div className="h-16 w-16 rounded-full bg-teal-500 mix-blend-lighten"></div>
          </div>
        </div>
        <div className="card isolate">A card</div>
        <div className="columns-2 text-black">
          <p>Well, let me tell you something, ...</p>
          <p className="break-inside-avoid-column">Sure, go ahead, laugh...</p>
          <p>Maybe we can live without...</p>
          <p>Look. If you think this is...</p>
        </div>
      </header>
    </div>
  );
}

export default App;

import "./Switch.css";
import "../../App.css";
import { useState } from "react";

const Switch = () => {
  const root = document.documentElement;

  const [dayMode, nightMode] = useState(false);

  const dayModeColors = () =>{
    root.style.setProperty("--main-bg-color", "#f1f1f1");
    root.style.setProperty("--main-outline-color", "#888888");
    root.style.setProperty("--main-text-color", "#434343");
  };

  const nightModeColors = () =>{
    root.style.setProperty("--main-bg-color", "#1f1f1f");
    root.style.setProperty("--main-outline-color", "#adadad");
    root.style.setProperty("--main-text-color", "#f1f1f1");
  };

  const switchHandler = () => {
    nightMode(!dayMode)
    dayMode ? dayModeColors() : nightModeColors()
  };

  return (
    <label className="switch" onChange={switchHandler}>
      <input type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export default Switch;

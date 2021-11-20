import React, { useState, useEffect, useRef } from "react";
import "./Accordion.css";
import Chevron from "./chevron.svg";

const Accordion = (props) => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    console.log(refHeight);
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  // console.log(toggle);
  return (
    <div className="accordion">
      <button onClick={toggleState} className="accordion-visible">
        {/**<span>Encabezado</span> */}
        <h3>{props.title}</h3>
        <img className={toggle && "active"} src={Chevron} alt="icon" />
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        {props.contents}
      </div>
    </div>
  );
};
export default Accordion;

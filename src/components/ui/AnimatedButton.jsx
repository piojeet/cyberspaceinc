import React from "react";
import { NavLink } from "react-router-dom";

export default function AnimatedButton({
  label = "Button",
  to = null,
  onClick = null,
  className = "",
  style = {},
}) {
  const InnerContent = () => (
    <>
      <span className="span-mother">
        {label.split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </span>
      <span className="span-mother2">
        {label.split("").map((char, i) => (
          <span key={i}>{char === " " ? "\u00A0" : char}</span>
        ))}
      </span>
    </>
  );

  return to ? (
    <NavLink to={to} className={`animated-ui ${className}`} style={style}>
      <InnerContent />
    </NavLink>
  ) : (
    <button onClick={onClick} className={`animated-ui ${className}`} style={style}>
      <InnerContent />
    </button>
  );
}

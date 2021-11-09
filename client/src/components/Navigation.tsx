import React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { Spring, useSpring, animated } from "react-spring";

function Navigation() {
  const [toggle, setToggle] = React.useState(false);
  const props = useSpring({
    from: {
      opacity: 0,
    },
    to: async (next, cancel) => {
      await next({
        opacity: 1,
      });
    },
  });
  return (
    <animated.div
      style={{
        ...props,
        position: "absolute",
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: 60,
          width: "100%",
          maxWidth: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Link to="/" style={{ width: 80 }}>
          <div>TEST</div>
        </Link>
        <Link to="/about" style={{ width: 80 }}>
          <div>ABOUT</div>
        </Link>
      </div>
    </animated.div>
  );
}

export default Navigation;

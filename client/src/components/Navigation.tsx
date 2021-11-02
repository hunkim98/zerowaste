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
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
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

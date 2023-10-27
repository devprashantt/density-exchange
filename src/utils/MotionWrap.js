import React from "react";
import { motion } from "framer-motion";

const MotionWrap = (Component, classNames) =>
  function HOC() {
    return (
      <motion.div
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}
        className={`${classNames} `}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Component />
      </motion.div>
    );
  };

export default MotionWrap;

import React from "react";
import "./App.css";
import Login from "./components/login/login";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ y: 800 }} // Starting position (bottom of the container)
      animate={{ y: 0 }} // Ending position (middle of the container)
      transition={{
        duration: 0.9, // Animation duration in seconds
        delay: 0.1, // Delay before the animation starts in seconds
        ease: "easeInOut", // Easing function (you can use others like "linear", "ease-in-out", etc.)
      }}
    >
      {<Login />}
    </motion.div>
  );
}

export default App;

import { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./Sidebar.scss";
import ToggleButton from "./ToggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    Transition: {
      type: "spring",
      satisfies: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    Transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

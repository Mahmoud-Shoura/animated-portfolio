import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Animated Portfolio
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="../../../src/Assets/facebook.png" alt="" />
            <img src="../../../src/Assets/instagram.png" alt="" />
            <img src="../../../src/Assets/youtube.png" alt="" />
            <img src="../../../src/Assets/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
